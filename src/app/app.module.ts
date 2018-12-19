import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoComponent } from './todo/todo.component';
import { BasicAuthIntercepterService } from './service/http/basic-auth-intercepter.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TestComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthIntercepterService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
