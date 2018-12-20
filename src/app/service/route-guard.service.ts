import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { BasicauthService } from './basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthService: BasicauthService) {  }

    // hard coded authentication
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   console.log(this.hardcodedAuthenticationService.isUserLoggedIn());
  //   if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
  //     return true;
  //   } else {
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(this.basicAuthService.isUserLoggedIn());
    if (this.basicAuthService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
