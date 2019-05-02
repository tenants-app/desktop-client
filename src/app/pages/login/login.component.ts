import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {NotifierService} from 'angular-notifier';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    private data = {};

    constructor(
        private httpClient: HttpClient,
        private notifier: NotifierService,
        private router: Router) {
    }

    public login() {
        this.httpClient
            .post('auth/login', this.data)
            .subscribe(
                data => {
                    localStorage.setItem('token', data['user']['token']);
                    this.notifier.notify('success', 'Logged in successfully!');
                    this.router.navigate(['dashboard']);
                }
            );
    }

}
