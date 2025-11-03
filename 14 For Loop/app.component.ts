import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  projectName = 'For Loop';

  userNames = ['Riyaz', 'Arbaz', 'Tasin', 'Femida'];

  userDetails = [
    { name: 'Riyaz', age: 25, city: 'Bangalore' },
    { name: 'Arbaz', age: 25, city: 'Mysore' },
    { name: 'Tasin', age: 20, city: 'Chennai' },
    { name: 'Femida', age: 24, city: 'Mumbai' }
  ];

  printDetails (userDetails:object) {
    console.log('User Details ::', userDetails);
  }
}