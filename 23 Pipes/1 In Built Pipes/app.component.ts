import { CurrencyPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [TitleCasePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = "Built In Pipes in Angular";

  salary = 850000;
}