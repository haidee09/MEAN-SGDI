import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { CommonModule } from '@angular/common';
import { HeaderFooterModule } from '../header-footer/headerfooter.module';
import { FormulariosModule } from '../formularios/formularios.module';
import {NgxPaginationModule} from 'ngx-pagination';
//Componente padre
import { AdministradorRoutingModule, routableComponentsAdmin } from './administrador-routing.module';
//Importar los modulos de los cuales hara uso este modulo.
//Declarar los componentes de los cuales hara uso este módulo.
@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    AdministradorRoutingModule,
    Ng2FilterPipeModule,
    HeaderFooterModule,
    FormulariosModule,
    BrowserModule
  ],
  declarations: [
    routableComponentsAdmin
  ],
  bootstrap:[routableComponentsAdmin]
})
export class AdministradorModule { }
