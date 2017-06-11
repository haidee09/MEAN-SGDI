import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BusquedaAdminService {
  constructor(private http:Http) {
    console.log('Servicio de búsqueda inicializado');
  }
  obtenerDocumentos(){
    return this.http.get('http://localhost:3500/obtenerdocs').map(res => res.json());
  }
}
