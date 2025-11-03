import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = 'Dynamic Styling';
  bgColor = "green"
  fontSize = "20px"
  changeColor() {
    console.log("Change Color Button Clicked...")
    this.bgColor = "red"
  }
  changeFontSize() {
    console.log("Change Font Size Button Clicked...")
    this.fontSize = "40px"
  }
}
