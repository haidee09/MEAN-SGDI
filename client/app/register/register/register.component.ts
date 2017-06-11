import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models-data/usuarios/user';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit() {
  }
  user: User;
  message: string = '';

  constructor(private authService: AuthService, private router: Router ) {
    this.user = new User;
  }
  registerUser(user) {
    this.authService.registerUser(user).subscribe( (res) => {
      if( res['success'] == true ) {
        this.authService.setUser(res['user']);
        this.message = res['message'];
        this.router.navigate(['']);
      } else {
        this.message = res['message'];
      }
    })
  }
}
