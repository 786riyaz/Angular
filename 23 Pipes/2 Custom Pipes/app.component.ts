import { Component } from '@angular/core';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';

@Component({
  selector: 'app-root',
  imports: [CurrencyConverterPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = "Custom Pipes in Angular";

  salary = 850000;
}
