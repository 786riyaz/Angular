import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
@Component({
  selector: 'app-root',
  imports: [ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles: [`span { color: green; text-decoration: underline; }`, `button { background-color: orange; color: white; font-weight: bold; border-radius: 8px; padding: 8px; }`],
})
export class AppComponent {
  projectName = 'Styling in Angular - TS File';
}