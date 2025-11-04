import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  projectName = 'Counter Application';
  counter = 0;

  incrementCounter() {
    console.log('Increment button clicked :: ', ++this.counter);
    // this.counter++;
  }
  resetCounter() {
    console.log('Reset button clicked :: ', this.counter = 0);
    // this.counter = 0;
  }
  decrementCounter() {
    console.log('Decrement button clicked :: ', this.counter==0?0:--this.counter);
    // if (this.counter > 0) { this.counter--; }
  }

}