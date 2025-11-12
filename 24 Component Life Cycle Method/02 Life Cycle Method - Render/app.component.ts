import { afterRender, afterNextRender, Component, ViewChild } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ProfileComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectName = "Component Life Cycle Methods";

  @ViewChild('profile') profileComponent?: ProfileComponent;

  count = 0;
  data_To_Send = 1;

  constructor() {
    // ✅ Correct: call inside constructor
    afterRender(() => {
      console.log("After Render");

      // always guard with optional chaining
      if (this.profileComponent) {
        console.log("Child data (after render):", this.profileComponent.data_To_Send);
      } else {
        console.log("Child not rendered yet");
      }
    });

    afterNextRender(() => {
      console.log("After Next Render");
    });
  }

  increaseCounter() {
    this.count = this.count + 1;
  }

  increaseData() {
    this.data_To_Send = this.data_To_Send + 1;
  }
}
