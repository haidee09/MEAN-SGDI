import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 //Importar los componentes de los cuales hará uso el modulo - Componentes del modulo administrador
import { AdministradorComponent } from './administrador/administrador.component';
import { NavbarAdminComponent } from '../administrador/navbar-admin/navbar-admin.component';
import { ListaDocumentosComponent } from './lista-documentos/lista-documentos.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
//formularios
import { AseIntResProfComponent } from './forms/ase-int-res-prof/ase-int-res-prof.component';
import { LiberacionActFrentegrupoComponent } from './forms/liberacion-act-frentegrupo/liberacion-act-frentegrupo.component';
import { LiberacionActEscolaresComponent } from './forms/liberacion-act-escolares/liberacion-act-escolares.component';
import { ActividadComplementariaComponent } from './forms/actividad-complementaria/actividad-complementaria.component';
import { AsignacionSinodalesComponent } from './forms/asignacion-sinodales/asignacion-sinodales.component';
import { SolicitudMantComponent } from './forms/solicitud-mant/solicitud-mant.component';
import { SeguimientoResProfComponent } from './forms/seguimiento-res-prof/seguimiento-res-prof.component';
import { ReporteResProfComponent } from './forms/reporte-res-prof/reporte-res-prof.component';
import { NivelDesempAlumnosComponent } from './forms/nivel-desemp-alumnos/nivel-desemp-alumnos.component';
import { SolicVisitaComponent } from './forms/solic-visita/solic-visita.component';

import { AuthGuardAdmin, AuthGuardUsuario, LoginActivate } from '../_guards/index';
 //Rutas de este módulo
const routes: Routes = [
  { path: '', redirectTo:'administrador', pathMatch:'full'},
  { path: 'administrador', component: AdministradorComponent,
    // rutas hijas, se verán dentro del componente padre
    children: [
      {path: 'inicio', component:BusquedaComponent, canActivate:[AuthGuardAdmin]},
      {path: 'listaDocumentos', component:ListaDocumentosComponent, canActivate:[AuthGuardAdmin]},
      //Rutas para los formularios
      {path: 'asigAseIntResProf', component: AseIntResProfComponent, canActivate:[AuthGuardAdmin]},
      {path: 'asigSinodales', component: AsignacionSinodalesComponent, canActivate:[AuthGuardAdmin]},
      {path: 'solicitudMantenimiento', component: SolicitudMantComponent, canActivate:[AuthGuardAdmin]},
      {path: 'cartaLibActAcad', component: LiberacionActEscolaresComponent, canActivate:[AuthGuardAdmin]},
      {path: 'consCumpActComp', component: ActividadComplementariaComponent, canActivate:[AuthGuardAdmin]},
      {path: 'consLibActGrupo', component:LiberacionActFrentegrupoComponent, canActivate:[AuthGuardAdmin]},
      {path: 'formSolicitudVisita', component: SolicVisitaComponent, canActivate:[AuthGuardAdmin]},
      {path: 'repFinDesempAlum', component: NivelDesempAlumnosComponent, canActivate:[AuthGuardAdmin]},
      {path: 'formEvaRepResProf', component: ReporteResProfComponent , canActivate:[AuthGuardAdmin]},
      {path: 'evaluacionResidencia', component: SeguimientoResProfComponent, canActivate:[AuthGuardAdmin]}
    ]
  }
];
//Exportar los componentes  que se van a declarar en el modulo de administrador
export const routableComponentsAdmin=[
  AdministradorComponent,
  NavbarAdminComponent,
  ListaDocumentosComponent,
  BusquedaComponent,
  LiberacionActFrentegrupoComponent,
  LiberacionActEscolaresComponent,
  ActividadComplementariaComponent,
  AsignacionSinodalesComponent,
  SolicitudMantComponent,
  AseIntResProfComponent,
  SeguimientoResProfComponent,
  ReporteResProfComponent,
  NivelDesempAlumnosComponent,
  SolicVisitaComponent
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdministradorRoutingModule { }
