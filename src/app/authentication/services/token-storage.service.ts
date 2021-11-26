import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public signOut(): void {
    window.sessionStorage.clear();
  }

  public saveAuthToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public readToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveAuthPrincipal(authPrincipal: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(authPrincipal));
  }

  public readAuthPrincipalIfPresent(): any {
    const authPrincipal = this.readAuthPrincipal();
    if (authPrincipal) {
      return JSON.parse(authPrincipal);
    }
    return {};
  }

  private readAuthPrincipal(): string | null {
    return window.sessionStorage.getItem(USER_KEY);
  }

  public isUserAuthenticated(): boolean {
    const authPrincipal = this.readAuthPrincipal();
    if (authPrincipal) {
      return true;
    }
    return false;
  }
}
