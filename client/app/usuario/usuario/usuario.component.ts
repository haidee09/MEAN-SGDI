import { Component} from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  constructor(private route: Router) {
    this.route.navigate(['/usuario/inicio']);
  }
}
