import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private data = {
    email: '',
    password: ''
  };

  constructor(
      private httpClient: HttpClient,
      private notifier: NotifierService,
      private router: Router) {}

  public login() {
    console.log(this.data);
    this.notifier.notify( 'success', 'You are awesome! I mean it!' );
  }

}
