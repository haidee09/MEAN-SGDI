import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipePipe } from './../pipes/date-format-pipe.pipe';
//Componentes del modulo
import { AsigAsesorIntResProfComponent } from './asig-asesor-int-res-prof/asig-asesor-int-res-prof.component';
import { AsigSinodalesComponent } from './asig-sinodales/asig-sinodales.component';
import { SolicitudMantenimientoComponent } from './solicitud-mantenimiento/solicitud-mantenimiento.component';
import { ConsLibActFgrupoComponent } from './cons-lib-act-fgrupo/cons-lib-act-fgrupo.component';
import { ConsActComplementariaComponent } from './cons-act-complementaria/cons-act-complementaria.component';
import { CartaLibActEscolaresComponent } from './carta-lib-act-escolares/carta-lib-act-escolares.component';
import { SolicitudVisitaComponent } from './solicitud-visita/solicitud-visita.component';
import { RepNivelDesempAlumComponent } from './rep-nivel-desemp-alum/rep-nivel-desemp-alum.component';
import { EvaSegResProfComponent } from './eva-seg-res-prof/eva-seg-res-prof.component';
import { EvaRepResProfComponent } from './eva-rep-res-prof/eva-rep-res-prof.component';
//EXPORTAR LOS COMPONENTES FORMULARIOS
export { AsigAsesorIntResProfComponent } from './asig-asesor-int-res-prof/asig-asesor-int-res-prof.component';
export { AsigSinodalesComponent } from './asig-sinodales/asig-sinodales.component';
export { SolicitudMantenimientoComponent } from './solicitud-mantenimiento/solicitud-mantenimiento.component';
export { ConsLibActFgrupoComponent } from './cons-lib-act-fgrupo/cons-lib-act-fgrupo.component';
export { ConsActComplementariaComponent } from './cons-act-complementaria/cons-act-complementaria.component';
export { CartaLibActEscolaresComponent } from './carta-lib-act-escolares/carta-lib-act-escolares.component';
export { SolicitudVisitaComponent } from './solicitud-visita/solicitud-visita.component';
export { RepNivelDesempAlumComponent } from './rep-nivel-desemp-alum/rep-nivel-desemp-alum.component';
export { EvaSegResProfComponent } from './eva-seg-res-prof/eva-seg-res-prof.component';
export { EvaRepResProfComponent } from './eva-rep-res-prof/eva-rep-res-prof.component';
//Exportar los modulos necesarios para el funcionamiento de los componentes de formularios
export { FormsModule } from '@angular/forms';
export { ReactiveFormsModule } from '@angular/forms';
export { DateFormatPipePipe } from './../pipes/date-format-pipe.pipe';
//Importar los modulos de los cuales hara uso este modulo.
//Declarar los componentes de los cuales hara uso este módulo.
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule
  ],
  declarations: [
    DateFormatPipePipe,
    AsigAsesorIntResProfComponent,
    AsigSinodalesComponent,
    SolicitudMantenimientoComponent,
    ConsLibActFgrupoComponent,
    ConsActComplementariaComponent,
    CartaLibActEscolaresComponent,
    SolicitudVisitaComponent,
    RepNivelDesempAlumComponent,
    EvaSegResProfComponent,
    EvaRepResProfComponent
  ],
  exports:[
    AsigAsesorIntResProfComponent,
    AsigSinodalesComponent,
    SolicitudMantenimientoComponent,
    ConsLibActFgrupoComponent,
    ConsActComplementariaComponent,
    CartaLibActEscolaresComponent,
    SolicitudVisitaComponent,
    RepNivelDesempAlumComponent,
    EvaSegResProfComponent,
    EvaRepResProfComponent,
    FormsModule,
    ReactiveFormsModule,
    DateFormatPipePipe
  ],
  providers: [],
  bootstrap: [
    AsigAsesorIntResProfComponent,
    AsigSinodalesComponent,
    SolicitudMantenimientoComponent,
    ConsLibActFgrupoComponent,
    ConsActComplementariaComponent,
    CartaLibActEscolaresComponent,
    SolicitudVisitaComponent,
    RepNivelDesempAlumComponent,
    EvaSegResProfComponent,
    EvaRepResProfComponent
 ]
})
export class FormulariosModule { }
