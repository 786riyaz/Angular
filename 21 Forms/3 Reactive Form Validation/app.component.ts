import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = "Forms Grouping in Angular";

  // Step 1 :: We have to add Validators in Form Group Controls
  profileForm = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.minLength(5), Validators.required]),
    emailId: new FormControl("", [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-z0-9.]+@[a-z0-9.]+\.[a-z]{2,4}$')]),
    test: new FormControl("Test"),
    // This will set default value
  });

  // Step 2 :: We have to create a getter Methods (Optional)
  get firstName() { return this.profileForm.get('firstName'); }
  get lastName() { return this.profileForm.get('lastName'); }
  get password() { return this.profileForm.get('password'); }
  get emailId() { return this.profileForm.get('emailId'); }

  submitData() {
    console.log("Received Data ::", this.profileForm.value);
  }

  setDefaultValue() {
    console.log("Setting Default Values.....");
    this.profileForm.setValue({
      // this.profileForm.patchValue({
      firstName: "New User",
      lastName: "--",
      password: "1234",
      emailId: "test@test.test",
      test: "Test"
      // test:""
    })
  }
}
