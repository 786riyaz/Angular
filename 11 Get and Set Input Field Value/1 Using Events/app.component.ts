import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  projectName = 'Get & Set Input Field Value';
  name = '';
  displayName = '';

  getName_NotRecommended(event: any) {
    this.name = event.target.value;
    console.log(this.name);
  }
  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
    console.log(this.name);
  }
  setName(event: Event) {
    console.log("Setting Name in the field")
    this.displayName = this.name 
  }
}