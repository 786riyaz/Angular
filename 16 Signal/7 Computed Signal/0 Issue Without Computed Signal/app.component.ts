import { Component, computed, effect, signal,Signal, WritableSignal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = 'Signal Basics';
  
  x=10;
  y=20;
  z = this.x + this.y;

  updateSignal() {
    console.log("Updating Value");
    console.log("Value Before ::", this.z);
    this.x = 50;
    console.log("Value After ::", this.z);
    // This value of Z will not change untill we re-asign the value
    this.z = this.x + this.y;
    console.log("Value Last ::", this.z);
    

  }
}