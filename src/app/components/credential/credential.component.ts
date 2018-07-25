import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.scss']
})
export class CredentialComponent implements OnInit {

  constructor(private userService: UserService) { }

  user;
  ngOnInit() {
    // todo get user pass by email
    // this.user = this.userService.getUser;
  }

}
