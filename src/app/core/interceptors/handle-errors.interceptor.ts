import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class HandleErrorsInterceptor implements HttpInterceptor {

    constructor(private notifier: NotifierService) {}

    intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                catchError((response: HttpErrorResponse) => {
                    console.log(response);
                    if (response.error.hasOwnProperty('errors')) {
                        for (const error in response.error.errors) {
                            if (response.error.errors.hasOwnProperty(error)) {
                                const errorResponse = response.error.errors[error];
                                let errorMessage;
                                if (typeof errorResponse === 'string' || errorResponse instanceof String) {
                                    errorMessage = error + ' ' + errorResponse;
                                } else {
                                    if (errorResponse.hasOwnProperty('msg')) {
                                        errorMessage = error + ' ' + errorResponse.msg;
                                    }

                                    if (errorResponse.hasOwnProperty('message')) {
                                        errorMessage = error + ' ' + errorResponse.message;
                                    }
                                }

                                this.notifier.notify('error', errorMessage);
                                return throwError(errorMessage);
                            }
                        }
                    }

                    for (const error in response.error) {
                        if (response.error.hasOwnProperty(error)) {
                            let errorMessage;

                            if (response.error[error].hasOwnProperty('msg')) {
                                errorMessage = response.error[error].msg;
                            }

                            if (response.error[error].hasOwnProperty('message')) {
                                errorMessage = response.error[error].message;
                            }

                            this.notifier.notify('error',  errorMessage);
                            return throwError(errorMessage);
                        }
                    }

                    return throwError('Server error');
            })
        );
    }
}
