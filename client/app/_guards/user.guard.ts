import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardUsuario implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let objUser = JSON.parse(localStorage.getItem('currentUser'));
    if (objUser!=null) {
      if(!objUser['admin']){
        return true;
      }
      else{
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/administrador']);
        location.reload();
        //this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
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

/*export class AuthGuardDeactive implements CanDeactivate<LoginComponent> {
  constructor(private router: Router) { }
  CanDeactivate(component: LoginComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/']);
    //this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}*/
