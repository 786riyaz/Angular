import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './interfaces/User';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  projectName = "API Calling";
  usersList  : User[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit1(): void {
    console.log("AppComponent initialized...");
    this.userService.getUsers().subscribe({
      next: (data: any) => {console.log("API Data:", data);
        this.usersList = data.products
      },
      error: (err) => console.error("API Error:", err)
    }); 
  }

  ngOnInit(): void {
    console.log("AppComponent initialized...");
    this.userService.getUsers().subscribe((data:User[]) => {
      this.usersList=data
      console.log(data);
    });
  }
}
