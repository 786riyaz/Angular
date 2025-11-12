import { Component, effect, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  projectName = 'Signal Basics';
  count = signal(0);

  constructor(){
    effect(() => {
      console.log("Getting Signal on Count Update :: ", this.count());
    })
  }

  updateSignal() {
    console.log("Updating Signal");

    // This Both method updates the count signal
    this.count.set(this.count() + 1);
    // this.count.update(value => value + 1);
  }
}