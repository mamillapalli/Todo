import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthIntercepterService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    console.log('http call being intercepted');
    const username = 'chanikya';
    const password = 'dummy';
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    request = request.clone({
      setHeaders : {
        Authorization : basicAuthHeaderString
      }
    });
    return next.handle(request);
  }
}
