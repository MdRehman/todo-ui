import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthService {

  constructor() { }
  authenticate(username, password) {
    if (username === 'Rehman' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    } else {
      return false;
    }

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null)
  }

  logout(){

    sessionStorage.removeItem('authenticatedUser');
  }


}
