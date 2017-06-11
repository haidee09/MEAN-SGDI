export class Documento {

  folio: string;
  tipo: string;
  categoria: string;
  fecha: any;
  hora: any;

  constructor()
  {
    this.folio = '';
    this.tipo = '';
    this.categoria = '';
    this.fecha = '';
    this.hora = '';
  }

  setFolio(folio):void
  {
    this.folio = folio;
  }
  setTipo(tipo):void
  {
    this.tipo = tipo;
  }
  setCategoria(categoria):void
  {
    this.categoria = categoria;
  }
  setFecha(fecha):void
  {
    this.fecha = fecha;
  }
  setHora(hora):void
  {
    this.hora = hora;
  }
  
}
