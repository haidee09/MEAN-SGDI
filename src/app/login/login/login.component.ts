import { Component,OnInit} from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { User } from '../../users/user';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  ngOnInit(){

  }
  loginForm: FormGroup;
  message: String;
  user: User;
  user_status: boolean;

  constructor(private router: Router, private authService: AuthService) {
    this.user = new User;
  }

  loginUser(user){
    this.authService.loginUser(user).subscribe( res => {
      this.user_status = res['success'];
      if(res['success'] == true) {
        this.authService.setUser(res['user']);
        this.message = res['message'];
        this.router.navigate(['']);
      } else {
        this.message = res['message'];
      }
    });
  }

}
