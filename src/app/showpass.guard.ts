import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ShowpassGuard implements CanActivate {
  constructor(private userService: UserService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isResetState = state.url.includes('/reset');
    const isVerified = this.userService.isVerified;

    if (isResetState && isVerified) {
      return true;
    } else {
      this.router.navigateByUrl('/sign-in');
    }
  }
}
