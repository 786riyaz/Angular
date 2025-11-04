import { Component, computed, effect, signal,Signal, WritableSignal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = 'Effect with Signal';
  count = signal(0);

  constructor(){
    effect(()=>{
      console.log("Getting Updated Signal....");
      console.log(this.count());
    })
  }

  updateSignal() {
    console.log("Updating Value");
    this.count.set(this.count() + 1);
  }
}