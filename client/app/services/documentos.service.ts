import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Documento } from '../models-data/documentos/documento';
import 'rxjs/add/operator/map';

@Injectable()
export class DocumentosService {

  private base_url = 'http://localhost:3500';

  constructor(public http: Http) { }

    saveDoc(documento: Documento): any{
    let body = JSON.stringify(documento);
    let headers = new Headers();
    //Indica que la respuesta sera de tipo JSON
  	headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.base_url}/savedoc`, body, options).map((res) => this.resSaveDoc(res));
  }

  resSaveDoc(res){
    let body = JSON.parse(res['_body']);
    if( body['success'] == true ){
      console.log('Registro de documento insertado en la BD');
      console.log(body['message']);
      console.log(body['doc']);
    }
    return body;
  }
}
