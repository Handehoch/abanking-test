import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CachingService {
  public readonly companiesKey = 'companies';

  constructor() {}

  setToLocalStorage<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getFromLocalStorage<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    if (!data) {
      return null;
    }

    return JSON.parse(data);
  }

  removeFromLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }
}
