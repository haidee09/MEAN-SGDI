import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './usuario/usuario.component' ;
import { HeaderComponent } from '../header/header.component';
import { NavbarUsuarioComponent } from '../navbar-usuario/navbar-usuario.component';
import { FooterComponent } from '../footer/footer.component';

const routes: Routes = [
  { path: '', component: UsuarioComponent },
];
export const routableComponents = [
  UsuarioComponent,
  HeaderComponent,
  NavbarUsuarioComponent,
  FooterComponent
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
