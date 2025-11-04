import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = 'Two way binding without ngModel';
  
  userName = "";
  updateInput(event : Event) {
    console.log("Input Updated...");
    this.userName = (event.target as HTMLInputElement).value;
  }
}