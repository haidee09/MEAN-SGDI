import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderFooterModule } from '../header-footer/headerfooter.module';
import { LoginComponent } from './login/login.component';
import { UsuarioModule } from '../usuario/usuario.module';
import { AdministradorModule} from '../administrador/administrador.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderFooterModule,
    UsuarioModule,
    AdministradorModule
  ],
  declarations: [
    LoginComponent
  ],
  exports:[
    LoginComponent
  ]
  //providers: [AuthService]
})
export class LoginModule { }
