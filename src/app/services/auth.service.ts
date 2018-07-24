import { Injectable } from '@angular/core';
import {IUser} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogin = false;
  private isVerified = false;
  constructor() { }


  signUp(user: IUser): IUser {
    return ({
      ...user,
      id: +Date.now()
    });
  }

  signIn(): void {
    this.isLogin = true;
  }

  signOut(): void {
    this.isLogin = false;
  }

}
