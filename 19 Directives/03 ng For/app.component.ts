import { NgFor } from '@angular/common';
import { Component} from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [ NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = "ngFor Directives";
  students = ["Riyaz", "Arbaz", "Tasin", "Femida"];
  studentsData = [
    {name:"Riyaz", age:25, email:"moh.riyazpathan@gmail.com", edu:["Diploma", "B.E"]},
    {name:"Arbaz", age:25, email:"arbazshaikh@gmail.com", edu:["B.Com", "MCA"]},
    {name:"Tasin", age:20, email:"tasinkhan@gmail.com", edu:["MBBS"]},
    {name:"Femida", age:24, email:"femidadatre@gmail.com", edu:["B.Com", "M.Com"]},
  ]
}
