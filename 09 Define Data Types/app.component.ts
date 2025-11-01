import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string | number = 'Angular 19';
  flag: boolean | string | number = true;
  other: any = "XYZ";
  name = 'Riyaz';

  sendMessage() {
    console.log("Hello from Riyaz");

    this.title = "Hello from Angular 19";
    this.title = 20;
    this.flag = "false";
    this.flag = 1;
    this.other = 100;
    this.other = false;
    this.other = { name: "Riyaz", age: 30 };
    this.other = ["HTML", "CSS", "JS", "TS", "Angular"];
  }

  getSum(a: number, b: number): void {
    // console.log(a + b);
    console.log(this.sum(a, b));
  }

  sum(a: number, b: number): number {
    return a + b;
  }
}