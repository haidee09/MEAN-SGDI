import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.css']
})
export class ListaDocumentosComponent{
  documentos:any = [
    {
      "ruta": "/administrador/solicitudMantenimiento",
      "tipo": "Solicitud de Mantenimiento",
      "categoria": "Solicitudes"
    },
    {
      "ruta": "/administrador/formSolicitudVisita",
      "tipo": "Formato de Solicitud de Visita",
      "categoria": "Solicitudes"
    },
    {
      "ruta": "/administrador/consLibActGrupo",
      "tipo": "Constancia de Liberación de Actividades Frente a Grupo",
      "categoria": "Constancias"
    },
    {
      "ruta": "/administrador/consCumpActComp",
      "tipo": "Constancia de Cumplimiento de Actividad Complementaria",
      "categoria": "Constancias"
    },
    {
      "ruta": "/administrador/repFinDesempAlum",
      "tipo": "Reporte Final del Nivel de Desempeño de los Alumnos",
      "categoria": "Reportes"
    },
    {
      "ruta": "/administrador/formEvaRepResProf",
      "tipo": "Formato de Evaluación de Reporte de Residencia Profesional",
      "categoria": "Residencias Profesionales"
    },
    {
      "ruta": "/administrador/asigAseIntResProf",
      "tipo": "Asignación de Asesor Interno para Residencias Profesionales",
      "categoria": "Residencias Profesionales"
    },
    {
      "ruta": "/administrador/evaluacionResidencia",
      "tipo":"Formato de Evaluación y Seguimiento de Residencia Profesional",
      "categoria":'Residencias Profesionales'
    },
    {
      "ruta": "/administrador/asigSinodales",
      "tipo": "Asignación de Sinodales",
      "categoria": "Titulación"
    },
    {
      "ruta": '/administrador/cartaLibActAcad',
      "tipo": 'Carta de Liberación de Actividades Académicas',
      "categoria": 'Cartas de Liberación'
    }
  ];
  documentosFilter: any = { "tipo": '' };
  p: number = 1;
}
