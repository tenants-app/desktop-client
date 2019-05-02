import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '../../../environments/environment';

const BASE_URL = environment.apiBaseUrl;

@Injectable()
export class AddBaseUrlInterceptor implements HttpInterceptor {

    intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            url: BASE_URL + '/' + req.url
        });
        return next.handle(req);
    }
}
