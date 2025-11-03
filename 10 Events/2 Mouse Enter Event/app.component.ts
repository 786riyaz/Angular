import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  projectName = 'Event Learning';

  // handleMouseEvent(event:any){
  handleMouseEvent(event: MouseEvent) {
    console.log('Inside handleEvent() method');
    console.log(event);
    console.log("Event Type ::", event.type);
    // console.log((event.target as Element).classList);
    console.log("Class List ::",(event?.target as Element).classList);
    console.log("Class Name ::",(event?.target as Element).className);
  }

  handleComponentClick(event: MouseEvent) {
    console.log('Inside handleComponentClick() method');
    console.log(event);
    console.log(event.target);
    console.log("Class List ::",(event?.target as Element).classList);
    console.log("Class Name ::",(event?.target as Element).className);
  }

  handleMouseEnter(event: MouseEvent) {
    console.log('Inside handleMouseEnter() method');
    console.log(event);
    console.log(event.target);
    console.log("Class List ::",(event?.target as Element).classList);
    console.log("Class Name ::",(event?.target as Element).className);
  }
}