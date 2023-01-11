import { Injectable } from '@angular/core';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  saveToLocalStorage(user: IUser): void {
    localStorage.setItem('email', user.email);
    localStorage.setItem('password', user.password);
  }

  isLoggedIn(): boolean {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    return email !== null && password !== null;
  }
}
