import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  projectName = 'Get & Set Input Field Value';
  EmailID = '';
  displayEmailID = '';

  getEmail(email: string) {
    this.EmailID = email;
    console.log("Got the Email ID ::",this.EmailID);
    // this.displayEmailID = this.EmailID;
  }

  setEmail() {
    console.log("Setting the Email ID ::",this.EmailID);
    this.displayEmailID = this.EmailID;
  }
}