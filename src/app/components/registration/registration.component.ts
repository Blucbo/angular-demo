import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IUser} from '../../model/user.model';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;
  public errorMessage: string;
  public errorMessages = {
    email: '',
    password: '',
    birthYear: ''
  };

  public errors = {
    'required': 'This field is required',
    'email': 'Not match email',
    'minlength': 'Min length 3'
  };

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: ['', []],
      lastName: ['', []],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      birthYear: ['', [Validators.required]], // todo custom validator
    });

    this.registrationForm.valueChanges.subscribe( data => {
      Object.keys(this.registrationForm.controls).map(control => {
        const controlField = this.registrationForm.controls[control];
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

  register(user: IUser) {
    const result = this.userService.registration(user);
    if (result.status) {
      this.router.navigateByUrl('/app');
    } else {
      this.errorMessage = result.errMessage;
    }
  }

}
