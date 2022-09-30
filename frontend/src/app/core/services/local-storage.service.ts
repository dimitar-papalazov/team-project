import { Injectable } from '@angular/core';

const APP_PREFIX = 'KAILO-';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    if(localStorage.getItem(key)){
      //This part has to be in a try-catch block, because users from previous versions may have already set theme and language values in localStorage,
      //but because this localStorage service wasn't prepared, the values are pure strings, and therefore unparsable.
      try {
        return JSON.parse(localStorage.getItem(key));
      } catch (e) {
        return localStorage.getItem(key);
      }
    }
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    let language = this.getItem('lang')
    language = language !== null ? language : 'en-uS'

    localStorage.clear();
    this.setItem('lang', language)
  }
}
