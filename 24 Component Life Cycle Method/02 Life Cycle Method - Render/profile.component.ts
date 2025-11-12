import { Component, Input, afterRender } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Input() data_To_Send = 0;
  val = 'val 1';

  constructor() {
    // ✅ fires after every render of this component
    afterRender(() => {
      console.log('ProfileComponent afterRender: DOM updated');
    });
    console.log('Constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnChanges() {
    console.log('ngOnChanges - Input changed');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - Profile destroyed');
  }
}
