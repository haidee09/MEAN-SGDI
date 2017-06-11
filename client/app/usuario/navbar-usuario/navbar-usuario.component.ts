import { Component} from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-navbar-usuario',
  templateUrl: './navbar-usuario.component.html',
  styleUrls: ['./navbar-usuario.component.css']
})
export class NavbarUsuarioComponent{
  constructor(private route: Router, private authService: AuthService){  }
  
  cerrarSesion()
  {
    this.authService.logout();
    this.route.navigate(['/login']);
  }
}
