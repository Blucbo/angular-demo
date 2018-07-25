import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const isLoginState = state.url === '/sign-in';
    const isRegistrationState = state.url === '/sign-up';
    const isAppState = state.url.includes('/app');

    const isAuth = this.authService.isAuth;

    if (isAppState) {
      if (isAuth) {
        return isAuth;
      } else {
        this.router.navigateByUrl('/sign-in');
      }
    }

    if (isAuth && (isLoginState || isRegistrationState)) {
      this.router.navigateByUrl('/app');
    }

    if (!isAuth && (isLoginState || isRegistrationState)) {
      return true;
    }
  }
}
