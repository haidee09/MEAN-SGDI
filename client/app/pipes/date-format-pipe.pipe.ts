import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormatPipe'
})
export class DateFormatPipePipe implements PipeTransform {
  //TRANSFORMAR FECHA PARA EL FORMATO PDF
  transform(value: string) {
    var datePipe = new DatePipe("es-MX");
    value = datePipe.transform(value, 'yMMMMd');
    return value;
  }
  //TRANSFORMAR FECHA PARA EL DOCUMENTO JSON QUE SERÁ GUARDADO EN LA BD
  transformDateBD(value:string){
    var datePipe = new DatePipe("es-MX");
    value = datePipe.transform(value, 'yMd');
    return value;
  }
  //TRANSFORMAR TIEMPO PARA EL DOCUMENTO JSON QUE SERÁ GUARDADO EN LA BD
  transformTimeBD(value:string){
    var datePipe = new DatePipe("es-MX");
    value = datePipe.transform(value, 'jm');
    return value;
  }
}
