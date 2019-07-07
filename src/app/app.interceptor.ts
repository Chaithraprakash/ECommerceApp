import { Observable } from 'rxjs';
import {  throwError } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpErrorResponse,
  HttpEvent
} from '@angular/common/http';
import { tap, map, retry } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(
  ) {}  token: string;

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
 
    const updatedRequest = request.clone({    
    });

    return next.handle(updatedRequest).pipe(
      tap(
        event => {
        
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {      
              errorMessage = `Error: ${error.error.message}`;
            } else {      
              errorMessage = `We are facing a server issues. Please contact system administrator`;
            }
            window.alert(errorMessage);
            return throwError(errorMessage);
          }
        }
      )
    );
  }

  
}
