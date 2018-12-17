import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Ravikanth';
  password = '';
  errorMessage = 'Invalid Credentials';
  inValid = true;

  constructor() { }

  handleLogin() {
    console.log('usename is ' + this.username);
    console.log('password is' + this.password);
    if (this.username === 'Ravikanth' && this.password === 'dummy') {
      this.inValid = false;
    } else {
      this.inValid = true;
    }
  }
  ngOnInit() {
  }


}
