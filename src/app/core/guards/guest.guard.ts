import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services';

@Injectable()
export class GuestGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.auth.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate([ 'dashboard' ]);
            return false;
        }
    }
}
