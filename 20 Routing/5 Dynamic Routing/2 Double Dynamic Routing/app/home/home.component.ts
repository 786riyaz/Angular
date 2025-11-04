import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users = [
    {name:"Riyaz", id:1},
    {name:"Arbaz", id:2},
    {name:"Tasin", id:3},
    {name:"Femida", id:4},
  ];
} 
