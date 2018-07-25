import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {IUser} from '../model/user.model';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: IUser;

  public isVerified = false;

  constructor(private authService: AuthService,
              private usersService: UsersService) {}



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
      return ({
        status: true,
        errMessage: null,
      });
    } else {
      return ({
        status: false,
        errMessage: 'User not found',
      });
    }
  }

  registration(user: IUser) {
    if (this.usersService.isExicteted(user.email)) {
      return ({
        status: false,
        errMessage: 'User with same email exicted',
      });
    } else {
      this.user = this.authService.signUp(user);
      this.usersService.push(this.user);
      return ({
        status: true,
        errMessage: null,
      });
    }
  }

  update(user: IUser): any {
    this.usersService.update(user);
    this.save(user);
  }

  save(user: IUser): void {
    this.user = user;
  }

  exitUser(): void {
    this.user = null;
    this.authService.signOut();
  }

  verified() {
    this.isVerified = true;
  }
}
