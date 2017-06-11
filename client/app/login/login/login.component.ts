import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { User } from '../../models-data/usuarios/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loginForm: FormGroup;
  message: string;
  user: User;
  user_status: boolean;

  ngOnInit(){
  }
  constructor(private router: Router, private authService: AuthService) {
    this.user = new User;
  }

  loginUser(user){
    this.authService.loginUser(user).subscribe( res => {
      this.user_status = res['success'];
      if(res['success'] == true) {
        this.authService.setUser(res['user']);
        this.message = res['message'];
        //Aqui se redirecciona a otro componente para poder mostrar las siguientes paginas
        if(!res['admin']){
          this.router.navigate(['/usuario']);
        }
        else if(res['admin']){
          this.router.navigate(['/administrador']);
        }
      } else {
        this.message = res['message'];
      }
    });
  }
}
