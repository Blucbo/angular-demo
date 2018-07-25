import { Injectable } from '@angular/core';
import {IUser} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth = false;
  private isVerified = false;
  constructor() { }


  signUp(user: IUser): IUser {
    this.isAuth = true;
    return ({
      ...user,
      id: +Date.now()
    });
  }

  signIn(): void {
    this.isAuth = true;
  }

  signOut(): void {
    this.isAuth = false;
  }

}
