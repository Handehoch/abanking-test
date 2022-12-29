import { Injectable } from '@angular/core';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  saveToLocalStorage(user: IUser): void {
    localStorage.setItem('username', user.username);
    localStorage.setItem('password', user.password);
  }

  isLoggedIn(): boolean {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    return username !== null && password !== null;
  }
}
