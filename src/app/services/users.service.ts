import { Injectable } from '@angular/core';
import {IUser} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: Array<IUser>;

  constructor() { }

  getUsers(): Array<IUser> {
    return this.users;
  }

  isExicteted(email): boolean {
    const [user] = this.users.filter(user => user.email === email);
    return !!user;
  }


}
