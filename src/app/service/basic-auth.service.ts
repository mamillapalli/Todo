import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicauthService {



  authenticate(username: string, password: string) {
    console.log(`calling Spring Welcome with basic authentication ${username}  and password ${password}`);
    // tslint:disable-next-line:prefer-const
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    return this.http.get<any>(`http://localhost:8080/authenticate/${username}`,
    {headers: header}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
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
