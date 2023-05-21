import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  get(key: string) {
    return localStorage.getItem(key);
  }

  set(key: string, data: any, toString?: boolean) {
    if (toString) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, data);
    }
  }

  delete(key: string) {
    localStorage.removeItem(key);
  }

  clearAll() {
    localStorage.clear();
  }

  existKey(key: string) {
    return localStorage.getItem(key) ? true : false
  }
}
