import { Component } from '@angular/core';
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

  count = 0;
  data_To_Send = 1;
  increaseCounter() {
    this.count = this.count + 1;
  }
  increaseData() {
    this.data_To_Send = this.data_To_Send + 1;
  }
}
