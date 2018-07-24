import { Injectable } from '@angular/core';
import {IUser} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: Array<IUser>;

  constructor() {
    this.getUsersWithStorage();
  }

  getUsers(): Array<IUser> {
    return this.users;
  }

  isExicteted(email): boolean {
    const [user] = this.users.filter(user => user.email === email);
    return !!user;
  }

  saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  getUsersWithStorage() {
    const savedUsers = localStorage.getItem('users');
    this.users = JSON.parse(savedUsers) || [];
  }

  push(user: IUser): void {
    this.users.push(user);
    this.saveUsers();
  }

//   localStorage.setItem('testObject', JSON.stringify(testObject));
//
// // Retrieve the object from storage
//   var retrievedObject = localStorage.getItem('testObject');
//
//   console.log('retrievedObject: ', JSON.parse(retrievedObject));


}
