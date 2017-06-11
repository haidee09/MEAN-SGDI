import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component' ;
import { NavbarUsuarioComponent } from '../usuario/navbar-usuario/navbar-usuario.component';
//Componentes de los formularios
import { AseIntResProfComponent } from './forms/ase-int-res-prof/ase-int-res-prof.component';
import { AsignacionSinodalesComponent } from './forms/asignacion-sinodales/asignacion-sinodales.component';
import { SolicMantComponent } from './forms/solic-mant/solic-mant.component';
import { LiberacionActEscolaresComponent } from './forms/liberacion-act-escolares/liberacion-act-escolares.component';
import { ActividadComplementariaComponent } from './forms/actividad-complementaria/actividad-complementaria.component';
import { LiberacionActFrentegrupoComponent } from './forms/liberacion-act-frentegrupo/liberacion-act-frentegrupo.component';
import { SolicVisitaComponent } from './forms/solic-visita/solic-visita.component';
import { NivelDesempAlumnosComponent } from './forms/nivel-desemp-alumnos/nivel-desemp-alumnos.component';
import { ReporteResProfComponent } from './forms/reporte-res-prof/reporte-res-prof.component';
import { SeguimientoResProfComponent } from './forms/seguimiento-res-prof/seguimiento-res-prof.component';
//Lista de documentos
import { ListaDocumentosComponent} from './lista-documentos/lista-documentos.component';
import { AuthGuardAdmin, AuthGuardUsuario, LoginActivate } from '../_guards/index';
//Rutas de este modulo
const routes: Routes = [
  { path: '', redirectTo:'usuario', pathMatch:'full'},
  { path: 'usuario', component: UsuarioComponent,
    children:[
      {path: 'inicio', component:ListaDocumentosComponent, canActivate:[AuthGuardUsuario]},
      //rutas para los formularios
      {path: 'asigAseIntResProf', component: AseIntResProfComponent, canActivate:[AuthGuardUsuario]},
      {path: 'asigSinodales', component: AsignacionSinodalesComponent, canActivate:[AuthGuardUsuario]},
      {path: 'solicitudMantenimiento', component: SolicMantComponent, canActivate:[AuthGuardUsuario]},
      {path: 'cartaLibActAcad', component: LiberacionActEscolaresComponent, canActivate:[AuthGuardUsuario]},
      {path: 'consCumpActComp', component: ActividadComplementariaComponent, canActivate:[AuthGuardUsuario]},
      {path: 'consLibActGrupo', component: LiberacionActFrentegrupoComponent, canActivate:[AuthGuardUsuario]},
      {path: 'formSolicitudVisita', component: SolicVisitaComponent, canActivate:[AuthGuardUsuario]},
      {path: 'repFinDesempAlum', component: NivelDesempAlumnosComponent, canActivate:[AuthGuardUsuario]},
      {path: 'formEvaRepResProf', component: ReporteResProfComponent , canActivate:[AuthGuardUsuario]},
      {path: 'evaluacionResidencia', component: SeguimientoResProfComponent, canActivate:[AuthGuardUsuario]}

    ]
  }
];
//Exportar los componentes  que se van a declarar en el modulo de usuario
export const routableComponentsUser = [
  NavbarUsuarioComponent,
  UsuarioComponent,
  AseIntResProfComponent,
  AsignacionSinodalesComponent,
  SolicMantComponent,
  LiberacionActEscolaresComponent,
  ActividadComplementariaComponent,
  LiberacionActFrentegrupoComponent,
  SolicVisitaComponent,
  NivelDesempAlumnosComponent,
  ReporteResProfComponent,
  SeguimientoResProfComponent,
  ListaDocumentosComponent
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
