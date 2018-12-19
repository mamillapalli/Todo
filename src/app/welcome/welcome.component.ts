import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldDataService } from '../service/Data/hello-world-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessage = 'Welcome ';
  messageFromServer = '';
  username = 'chanikya';
  password = 'dummy';
  constructor(private router: ActivatedRoute, private helloWorldDataService: HelloWorldDataService) {   }
  ngOnInit() {
    this.welcomeMessage = this.welcomeMessage + this.router.snapshot.params['name'];
    console.log(this.router.snapshot.params['name']);
    console.log(this.router.snapshot.params['password']);
  }
 
  invokeHelloWorldRestService() {
    console.log('Invoke Hello World rest service');
    console.log(this.helloWorldDataService.callWelcomeService(this.username, this.password));
    this.helloWorldDataService.callWelcomeService(this.username, this.password).subscribe(
      ravi => this.handleSuccessResponse(ravi),
      error => this.handleErrorResponse(error));
  }
  handleErrorResponse(error) {
    console.log('error object is ' + error);
    console.log(error.error.message);
    this.messageFromServer = error.error.message;
  }
  handleSuccessResponse(response) {
    console.log('message from the bean is ' + response.message);
    this.messageFromServer = response.message;
  }


  // Access to XMLHttpRequest at 'http://localhost:8080/hwb/Chanikya' from origin
  // 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
}
