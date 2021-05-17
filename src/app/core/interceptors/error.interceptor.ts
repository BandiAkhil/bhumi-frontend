import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
//import { NotifierService } from 'angular-notifier';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    //private notifierService: NotifierService,
    private router: Router,
    private authService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    //   .pipe(tap(() => { },
    //     (error: any) => {
    //       if (error instanceof HttpErrorResponse) {
    //         if (error.status === 401 && this.authService.isAuthenticated()) {
    //           this.authService.logout();
    //           this.router.navigate(['/auth/login'], {
    //             queryParams: {
    //               redirect: this.router.url
    //             }
    //           }).then(() => {
    //             //this.notifierService.notify('warning', 'Please log in again.');
    //           });
    //         }
    //       }
    //     })
    //  );
  }
}
