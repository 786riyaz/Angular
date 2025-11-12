import { NgIf } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = "ngIf Directives";

  loggedIn = false;
  // loggedIn = true;

  block = 0;

  changeHeading() {
    console.log("Changing Heading...");
    this.block = (this.block+1)%6;
  }
}
