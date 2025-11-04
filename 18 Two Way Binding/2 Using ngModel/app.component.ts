import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = 'Two way binding with ngModel';

  userName = "";
}
