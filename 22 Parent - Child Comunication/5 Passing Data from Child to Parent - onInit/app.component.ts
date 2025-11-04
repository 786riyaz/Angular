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

  users:undefined|string[];

  handleUsers(users:string[]) {
    console.log(users);
    this.users = users;
  }

}