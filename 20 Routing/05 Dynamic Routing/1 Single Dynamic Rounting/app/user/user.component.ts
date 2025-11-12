import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
userName:string|null= "";

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userName = params['name'];
      console.log(params)
      // console.log(params['id'])
    })
  }
}

