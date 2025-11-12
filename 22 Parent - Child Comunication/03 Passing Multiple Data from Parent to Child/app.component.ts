import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = "Parent - Child Communication";
  userName = "Riyaz Pathan"

  onUserChange(value:string){
    console.log("User Changed :: ", value);
    this.userName = value;
  }
}