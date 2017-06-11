import { Component} from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent{
  constructor(private route: Router, private authService: AuthService){  }

  cerrarSesion()
  {
    this.authService.logout();
    this.route.navigate(['/login']);
  }
}
