import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HelloWorldDataService {

  constructor(private http: HttpClient) { }

  callSpringHelloWorld(name: String) {
    console.log('In service, calling Spring Hello World' + name);
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hwb/${name}`);
  }

  callWelcomeService(username: String, password: String) {
    console.log(`calling Spring Hello World with basic authentication ${username}  and password ${password}`);
    // tslint:disable-next-line:prefer-const
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    return this.http.get<HelloWorldBean>(`http://localhost:8080/authenticate/${username}`,
    {headers: header});
  }

}

export class HelloWorldBean {
  constructor(public message: String) {  }
}

// Access to XMLHttpRequest at 'http://localhost:8080/hwb/Chanikya' from origin
// 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
