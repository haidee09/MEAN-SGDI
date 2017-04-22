import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule,routableComponents } from './usuario-routing.module';
@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  declarations: [
    routableComponents
  ]
})
export class UsuarioModule { }
