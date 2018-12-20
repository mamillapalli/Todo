import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { WelcomeComponent } from '../welcome/welcome.component';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicauthService } from '../service/basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  inValid = false;

  constructor(private router: Router, private hardcodedAuthenticaion: HardcodedAuthenticationService, 
    private basicauthService: BasicauthService ) { }

    handleJwtAuthLogin() {
      console.log('usename is ' + this.username);
      console.log('password is' + this.password);
      this.basicauthService.jwtAuthenticate( this.username, this.password).subscribe(
        successData => {
          console.log('JWT Authentication successful');
            this.inValid = false;
            console.log('trying to route to welcome page');
            this.router.navigate(['welcome', this.username ]);
        },
        errorData => {
          console.log('error data is ' + errorData);
          this.inValid = true;
        }
      );
    }


  handleBasicAuthLogin() {
    console.log('usename is ' + this.username);
    console.log('password is' + this.password);
    this.basicauthService.authenticate( this.username, this.password).subscribe(
      successData => {
        console.log('success data is ' + successData);
        if (successData.message === 'authentication successful') {
          this.inValid = false;
          console.log('trying to route to welcome page');
          this.router.navigate(['welcome', this.username ]);
        }
      },
      errorData => {
        console.log('error data is ' + errorData);
        this.inValid = true;
      }
    );
  }

  handleLogin() {
    console.log('usename is ' + this.username);
    console.log('password is' + this.password);
    if (this.hardcodedAuthenticaion.authenticate( this.username, this.password)) {
      this.inValid = false;
      this.router.navigate(['welcome', this.username , this.password]);
    } else {
      this.inValid = true;
    }
  }
  ngOnInit() {
  }


}
