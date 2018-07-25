import { Component, OnInit } from '@angular/core';
import {IUser} from '../../model/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public loadedProfile: IUser;
  public profileForm: FormGroup;

  public errorMessages = {};

  public errors = {
    'required': 'This field is required',
    'email': 'Not match email',
    'minlength': 'Min length 3'
  };

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) {
    this.loadedProfile = this.userService.getUser();
  }

  ngOnInit() {
    this.createProfileForm();

    this.profileForm.valueChanges.subscribe( data => {
      Object.keys(this.profileForm.controls).map(control => {
        const controlField = this.profileForm.controls[control];
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

  createProfileForm(): void {
    this.profileForm = this.fb.group({
      firstName: [ this.loadedProfile.firstName || '', []],
      lastName: [ this.loadedProfile.lastName || '', []],
      email: [ this.loadedProfile.email || '', [Validators.required, Validators.email]],
      password: [this.loadedProfile.password || '', [Validators.required, Validators.minLength(3)]],
      birthYear: [ this.loadedProfile.birthYear || '', [Validators.required]], // todo custom validator
    });
  }

  applyChanges(user: IUser): void {
    this.userService.update({
      ...user,
      id: this.loadedProfile.id
    });
  }

}
