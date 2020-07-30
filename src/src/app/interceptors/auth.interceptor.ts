import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

// Environments
import { environment } from '@env/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestToForward = req;

    const token = environment.permanentToken;
    if (token !== '') {
      const tokenValue = 'Bearer ' + token;
      requestToForward = req.clone({ setHeaders: { Authorization: tokenValue } });
    }

    return next.handle(requestToForward).pipe(
      tap(
        () => {},
        // (err: any) => {
        //   if (err instanceof HttpErrorResponse) {
        //     if (err.status !== 401) {
        //       return;
        //     }
        //     this.router.navigate(['/']);
        //   }
        // },
      ),
    );
  }
}
