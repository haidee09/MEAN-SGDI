import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoginActivate implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let objUser = JSON.parse(localStorage.getItem('currentUser'));
    if (objUser!=null){
      if(objUser['admin']){
        this.router.navigate(['/administrador']);
        location.reload();
        return false;
      }
      if(!objUser['admin']){
        this.router.navigate(['/usuario']);
        location.reload();
        return false;
      }    
    }
    else{
      return true;
    }
    //this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
  }
}
