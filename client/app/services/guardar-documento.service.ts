import { Injectable } from '@angular/core';
import { DocumentosService } from './documentos.service';
import { Documento } from '../models-data/documentos/documento';
@Injectable()
export class GuardarDocumentoService {

  private documento: Documento;
  private message: string ='';

  constructor(private docService: DocumentosService) { }

  guardarDocumento(folio:string, tipo:string, categoria:string,
    date_formattedBD:any, time_formattedBD: any){
    this.documento = new Documento();
    this.documento.setFolio(folio);
    this.documento.setTipo(tipo);
    this.documento.setCategoria(categoria);
    this.documento.setFecha(date_formattedBD);
    this.documento.setHora(time_formattedBD);
    this.docService.saveDoc(this.documento).subscribe( (res) => {
      if(res['success'] == true) {
        this.message = res['message'];
      }
      else {
        this.message = res['message'];
      }
    });
    return this.message;
  }
}
