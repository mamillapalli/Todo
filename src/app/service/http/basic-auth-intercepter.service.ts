import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthIntercepterService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    console.log('http call being intercepted');
    const basicAuthHeaderString = sessionStorage.getItem('basicAuthHeaderString');
    const Token = sessionStorage.getItem('Token');
    if ( basicAuthHeaderString !== null) {
      request = request.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      });
    }
    if ( Token !== null) {
      request = request.clone({
        setHeaders : {
          Authorization : Token
        }
      });
    }
    return next.handle(request);
  }
}
