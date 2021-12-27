import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { LoginService } from 'src/app/authentication/services/login.service';
import { TokenStorageService } from '../../authentication/services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenInterceptor implements HttpInterceptor {

  constructor(
    private readonly tokenStorageService: TokenStorageService,
    private readonly loginService: LoginService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwtToken = this.tokenStorageService.readToken();

    if (this.isAuthorizationRequiredFor(request) && jwtToken) {
      const requestWithAuthorization = this.provideRequestWithAuthorization(request, jwtToken);
      return next.handle(requestWithAuthorization);
    } else if (this.isAuthorizationRequiredFor(request) && !jwtToken) {
      this.loginService.logOut();
      return next.handle(request);
    } else {
      return next.handle(request);
    }
  }

  private isAuthorizationRequiredFor(request: HttpRequest<unknown>): boolean {
    return request.headers.get("Authorization-Required") === "true";
  }

  private provideRequestWithAuthorization(
    request: HttpRequest<unknown>, jwtToken: string): HttpRequest<unknown> {
    return request.clone({
      headers: request.headers.set("Authorization", "Bearer " + jwtToken)
    });
  }
}
