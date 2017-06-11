import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.css']
})
export class ListaDocumentosComponent implements OnInit {
  documentos:any;
  documentosFilter:any;
  constructor() {
    this.documentos = [
      {
        "ruta": "/usuario/solicitudMantenimiento",
        "tipo": "Solicitud de Mantenimiento",
        "categoria": "Solicitudes"
      },
      {
        "ruta": "/usuario/formSolicitudVisita",
        "tipo": "Formato de Solicitud de Visita",
        "categoria": "Solicitudes"
      },
      {
        "ruta": "/usuario/consLibActGrupo",
        "tipo": "Constancia de Liberación de Actividades Frente a Grupo",
        "categoria": "Constancias"
      },
      {
        "ruta": "/usuario/consCumpActComp",
        "tipo": "Constancia de Cumplimiento de Actividad Complementaria",
        "categoria": "Constancias"
      },
      {
        "ruta": "/usuario/repFinDesempAlum",
        "tipo": "Reporte Final del Nivel de Desempeño de los Alumnos",
        "categoria": "Reportes"
      },
      {
        "ruta": "/usuario/formEvaRepResProf",
        "tipo": "Formato de Evaluación de Reporte de Residencia Profesional",
        "categoria": "Residencias Profesionales"
      },
      {
        "ruta": "/usuario/asigAseIntResProf",
        "tipo": "Asignación de Asesor Interno para Residencias Profesionales",
        "categoria": "Residencias Profesionales"
      },
      {
        "ruta": "/usuario/evaluacionResidencia",
        "tipo":"Formato de Evaluación y Seguimiento de Residencia Profesional",
        "categoria":'Residencias Profesionales'
      },
      {
        "ruta": "/usuario/asigSinodales",
        "tipo": "Asignación de Sinodales",
        "categoria": "Titulación"
      },
      {
        "ruta": '/usuario/cartaLibActAcad',
        "tipo": 'Carta de Liberación de Actividades Académicas',
        "categoria": 'Cartas de Liberación'
      }
    ];
    this.documentosFilter= { "tipo": '' };
  }

  ngOnInit() {
  }

}
