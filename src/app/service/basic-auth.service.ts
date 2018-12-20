import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { BACK_END_URI } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicauthService {



  authenticate(username: string, password: string) {
    console.log(`calling Spring Welcome with basic authentication ${username}  and password ${password}`);
    // tslint:disable-next-line:prefer-const
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    const header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    return this.http.get<any>(`${BACK_END_URI}/authenticate/${username}`,
    {headers: header}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('basicAuthHeaderString', basicAuthHeaderString);
          return data;
        }
      )

    );
  }

  public isUserLoggedIn() {
    return !(sessionStorage.getItem('authenticatedUser') === null);
  }

  public logoutUser() {
    sessionStorage.removeItem( 'authenticatedUser');
  }

  constructor(private http: HttpClient) { }
}
