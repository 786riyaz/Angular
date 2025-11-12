import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Input() data_To_Send = 0;

  val = "val 1";

  constructor() {
    console.log("Constructor Method Called. Before UI Loads....");
    this.val = "val 2";
    console.log(this.val);
  }

  ngOnInit() {
    console.log("ngOnIt -- Component Initialized");
    this.val = "val 3";
    console.log(this.val);
  }

  ngOnChanges() {
    console.log("ngOnChanges - Value has been Changed...");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy -- Component Hides from UI");
    this.val = "val 4";
    console.log(this.val);
  }
}
