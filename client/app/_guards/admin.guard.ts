import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardAdmin implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let objUser = JSON.parse(localStorage.getItem('currentUser'));
    if (objUser!=null) {
      if(objUser['admin']){
        return true;
      }
      else{
        // logged in so redirect to usuario page
        this.router.navigate(['/usuario']);
        location.reload();
        return false;
      }
    }
    else{
      // not logged in so redirect to login page
      this.router.navigate(['/']);
      return false;
    }
  }
}
