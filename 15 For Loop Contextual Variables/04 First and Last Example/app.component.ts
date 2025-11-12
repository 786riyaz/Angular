import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = 'For Loop Contextual Variables';
  users = [
    "Riyaz",
    "Arbaz",
    "Tasin",
    "Femida"
  ];
}