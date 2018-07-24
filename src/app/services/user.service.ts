import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {IUser} from '../model/user.model';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: IUser;

  public isVerified = false;

  constructor(private authService: AuthService,
              private usersService: UsersService) { }



  getUser(): IUser {
    return this.user;
  }

  login(email: string, password: string): any {
    const [user] = this.usersService.getUsers().filter(user => {
      return (user.email === email && user.password === password);
    });
    if (!!user) {
      this.save(user);
      this.authService.signIn();
    } else {
      return 'User not found';
    }
  }

  registration(user: IUser): any {
    if (this.usersService.isExicteted(user.email)) {
      return 'User with same email exicted';
    } else {
      this.user = this.authService.signUp(user);
    }
  }

  save(user: IUser): void {
    this.user = user;
  }

  deleteUser(): void {
    this.user = null;
  }

  verified() {
    this.isVerified = true;
  }
}
