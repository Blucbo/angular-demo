import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  public forgotForm: FormGroup;
  public errorMessage: string;
  public errorMessages = {};

  public errors = {
    'required': 'This field is required',
    'email': 'Not match email',
  };

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mathTask: ['', [Validators.requiredTrue]],
    });

    this.forgotForm.valueChanges.subscribe( data => {
      Object.keys(this.forgotForm.controls).map(control => {
        const controlField = this.forgotForm.controls[control];
        if (controlField.errors !== null) {
          const errors = controlField.errors;
          for (const key of Object.keys(errors)) {
            const error = controlField.errors[key];
            if (error && controlField.invalid && (controlField.dirty || controlField.touched)) {
              this.errorMessages[control] = this.errors[key];
              break;
            }
          }
        } else {
          delete this.errorMessages[control];
        }
      });
    });
  }

  getPassword({email}) {
    console.log('email', email);
    const result = this.userService.getPassword(email);
    if (result.status) {
      this.router.navigateByUrl('forgot/reset');
    } else {
      this.errorMessage = result.errMessage;
    }
  }
}
