import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {IUser} from '../../model/user.model';

@Component({
  selector: 'app-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.scss']
})
export class CredentialComponent implements OnInit {

  constructor(private userService: UserService) { }

  public user: IUser;

  ngOnInit() {
    this.user = this.userService.getUser();
  }

}
