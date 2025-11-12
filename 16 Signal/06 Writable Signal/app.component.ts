import { Component, effect, signal, WritableSignal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = 'Signal Basics';
  // count : WritableSignal<number>= signal<number>(0);
  // count : WritableSignal<number|string> = signal<number|string>(0);
  count : WritableSignal<number|string> = signal(0);

  constructor(){
    effect(() => {
      console.log("Getting Signal on Count Update :: ", this.count());
    })
  }

  updateSignal() {
    console.log("Updating Signal");
    // this.count.set(this.count()+1)
    this.count.set("Hello")
  }
}