import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userName:string|null = "";
  
constructor(private route:ActivatedRoute) {}
// constructor(route:ActivatedRoute) {}

// ngOnInit():void {}
ngOnInit(){
  let name = this.route.snapshot.paramMap.get("name");
  console.log("Got the Name ::", name)
  this.userName = name;
}
}
