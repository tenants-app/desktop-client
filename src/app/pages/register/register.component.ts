import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NotifierService} from 'angular-notifier';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    private data = {};

    constructor(
        private httpClient: HttpClient,
        private notifier: NotifierService,
        private router: Router) {
    }

    public register() {
        this.httpClient
            .post('auth/register', this.data)
            .subscribe(
                data => {
                    localStorage.setItem('token', data['user']['token']);
                    this.notifier.notify('success', 'Registered successfully!');
                    this.router.navigate(['dashboard']);
                }
            );
    }

}
