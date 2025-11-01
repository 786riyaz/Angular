import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 19';
  name = 'Riyaz';

  sendMessage() {
    console.log("Hello from Riyaz");
    this.sendAlert();
  }
  
  sendAlert() {
    alert("Hello from Alert");
  }
}