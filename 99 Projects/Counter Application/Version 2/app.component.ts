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
  handleCounter(action: string) {
    if (action === 'add') {
      this.counter++;
    } else if (action === 'minus') {
      if (this.counter > 0) {
        this.counter--;
      }
    } else {
      this.counter = 0;
    }
    console.log("Updated Counter :", action, ":", this.counter);
  }
}