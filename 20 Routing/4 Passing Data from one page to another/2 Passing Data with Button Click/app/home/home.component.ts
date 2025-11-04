import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){}

  goToProfile() {
    console.log("Inside the go to profile page function...");
    // this.router.navigate(['profile', {name:'Riyaz Pathan'}])
    this.router.navigate(['profile'], {queryParams:{name:"Riyaz Pathan"}})
  }
} 
