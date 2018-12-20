import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BACK_END_URI } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})


export class HelloWorldDataService {

  constructor(private http: HttpClient) { }

  // below method is not used any more
  // callSpringHelloWorld(name: String) {
  //   console.log('In service, calling Spring Hello World' + name);
  //   return this.http.get<HelloWorldBean>(`http://localhost:8080/hwb/${name}`);
  // }

  callWelcomeService(username: String, password: String) {
    console.log(`calling Spring Hello World with basic authentication ${username}  and password ${password}`);
    // tslint:disable-next-line:prefer-const
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    return this.http.get<HelloWorldBean>(`${BACK_END_URI}/authenticate/${username}`,
    {headers: header});
  }

}

export class HelloWorldBean {
  constructor(public message: String) {  }
}
