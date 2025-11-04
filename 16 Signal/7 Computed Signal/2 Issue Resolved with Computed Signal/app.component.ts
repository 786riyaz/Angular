import { Component, computed, effect, signal,Signal, WritableSignal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = 'Signal Basics';
  
  x=signal(10);
  y=signal(20);
  z = computed(()=>this.x() + this.y());

  updateSignal() {
    console.log("Updating Value");
    console.log("Value Before ::", this.z());
    this.x.set(50);
    console.log("Value After ::", this.z());
    console.log("Value Last ::", this.z());
  }
}