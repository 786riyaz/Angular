import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = "ngSwitch Directives";

  color = "";

  changeColor (color:string) {
    console.log("Changing Color ::", color);
    this.color = color;
  }
}