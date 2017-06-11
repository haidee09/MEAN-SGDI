import { Component, OnInit } from '@angular/core';
import { BusquedaAdminService} from '../../services/busqueda-admin.service';
import { Documento } from '../../models-data/documentos/documento';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  documentos: Documento[];
  documentosFilter: any;
  documentosFilterTwo: any;
  documentosFilterThree: any;
  check:boolean = false;
  constructor(private busquedaAdminService:BusquedaAdminService) {
    this.busquedaAdminService.obtenerDocumentos()
      .subscribe(documentos => {
        this.documentos = documentos;
      });
    this.documentosFilter = { "folio": ''};
    this.documentosFilterThree = { "fecha": ''};
  }
  ngOnInit() {
  }
  busquedaCategoria1(){
    this.check = true;
    this.documentosFilterTwo = { "categoria": 'Residencias Profesionales'};
  }
  busquedaCategoria2(){
    this.check = true;
    this.documentosFilterTwo = { "categoria": 'Titulación'};
  }
  busquedaCategoria3(){
    this.check = true;
    this.documentosFilterTwo = { "categoria": 'Servicio Social'};
  }
  busquedaCategoria4(){
    this.check = true;
    this.documentosFilterTwo = { "categoria": 'Actividades Complementarias'};
  }
  busquedaCategoria5(){
    this.check = true;
    this.documentosFilterTwo = { "categoria": 'Solicitudes'};
  }
  busquedaCategoria6(){
    this.check = true;
    this.documentosFilterTwo = { "categoria": 'Constancias'};
  }
  todasCategorias(){
    this.check = false;
  }
}
