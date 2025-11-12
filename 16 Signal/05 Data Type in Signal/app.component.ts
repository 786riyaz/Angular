import { Component, effect, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = 'Signal Basics';
  count = signal<number>(0);
  // count = signal<number|string>(0);

  constructor(){
    effect(() => {
      console.log("Getting Signal on Count Update :: ", this.count());
    })
  }

  updateSignal() {
    console.log("Updating Signal");
    this.count.set(this.count()+1)
    // this.count.set("Hello")
  }
}