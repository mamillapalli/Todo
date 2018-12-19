import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  public authenticate(username: string, password: String) {
    if (username === 'chanikya' && password === 'dummy') {
      sessionStorage.setItem( 'authenticatedUser', username);
      return true;
    }
    return false;
  }

  public isUserLoggedIn() {
    return !(sessionStorage.getItem('authenticatedUser') === null);
  }

  public logoutUser() {
    sessionStorage.removeItem( 'authenticatedUser');
  }

  constructor() { }
}
