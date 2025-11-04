import { Component, NgModule, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './interfaces/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectName = "API Calling";
  usersList: User[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    console.log("AppComponent initialized...");
    this.getUserData();
  }

  getUserData() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.usersList = data
      console.log(data);
    });
  }
  addUser(user: User) {
    console.log("Data to Submit ::", user);
    this.userService.saveUsers(user).subscribe((data: User) => {
      console.log(data);
      if (data) {
        this.getUserData();
      }
    })
  }
 
  deleteUser(id: string) {
    console.log("Deleting User ::", id);
    this.userService.deleteUser(id).subscribe((data: User) => {
      console.log("Deleted Data :: ", data);
      if (data) {
        this.getUserData();
      }
    })
  }

}

