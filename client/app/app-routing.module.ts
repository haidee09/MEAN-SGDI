import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ LoginComponent } from './login/login/login.component';
import{ RegisterComponent } from './register/register/register.component';
import{ UsuarioComponent } from './usuario/usuario/usuario.component';
import{ AdministradorComponent } from './administrador/administrador/administrador.component';
import { AuthGuardAdmin, AuthGuardUsuario, LoginActivate } from './_guards/index';

const appRoutes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent, canActivate:[LoginActivate]},
  {path: 'register',component: RegisterComponent},
  {path: 'usuario', component: UsuarioComponent, canActivate:[AuthGuardUsuario]},
  {path: 'administrador', component: AdministradorComponent, canActivate:[AuthGuardAdmin]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardAdmin,
    AuthGuardUsuario,
    LoginActivate
  ]
})
export class AppRoutingModule {}
