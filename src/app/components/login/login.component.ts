import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public signInForm: FormGroup;

  public errorMessage;

  constructor(private router: Router,
              private userService: UserService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn(credentials) {
    const result = this.userService.login(credentials.email, credentials.password);
    if (result.status) {
      this.router.navigateByUrl('/app');
    } else {
      this.errorMessage = result.errMessage;
    }
  }
}
