import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { HeaderFooterModule } from '../header-footer/headerfooter.module';
import { FormulariosModule } from '../formularios/formularios.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { UsuarioRoutingModule,routableComponentsUser } from './usuario-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Ng2FilterPipeModule,
    UsuarioRoutingModule,
    HeaderFooterModule,
    FormulariosModule,
    NgxPaginationModule
  ],
  declarations: [
    routableComponentsUser
  ]
})
export class UsuarioModule { }
