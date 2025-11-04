import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = "Template Driven Form Validation";

  userData : any = {};
  rangeValue = 20;

  addDetails(val:NgForm){
    console.log(val);
    this.userData = val;
  }
}
