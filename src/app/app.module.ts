import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AuthGuard, GuestGuard} from './core/guards';

import {AddBaseUrlInterceptor, HandleErrorsInterceptor} from './core/interceptors';

import {NotifierModule} from 'angular-notifier';
import {JwtModule} from '@auth0/angular-jwt';

export function jwtTokenGetter() {
    return localStorage.getItem('token');
}


@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ComponentsModule,
        NgbModule,
        RouterModule,
        AppRoutingModule,
        NotifierModule.withConfig({
            position: {
                horizontal: {
                    position: 'middle',
                },
                vertical: {
                    position: 'top',
                }
            },
        }),
        JwtModule.forRoot({
            config: {
                tokenGetter: jwtTokenGetter
            }
        }),
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
    ],
    providers: [
        GuestGuard,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AddBaseUrlInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HandleErrorsInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
