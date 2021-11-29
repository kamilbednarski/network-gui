import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../../authentication/services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenInterceptor implements HttpInterceptor {

  constructor(private tokenStorageService: TokenStorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwtToken = this.tokenStorageService.readToken();
    if (jwtToken) {
      const requestWithAuthentication = request.clone({
        headers: request.headers.set("Authorization", "Bearer " + jwtToken)
      });
      return next.handle(requestWithAuthentication);
    }
    else {
      return next.handle(request);
    }
  }
}
