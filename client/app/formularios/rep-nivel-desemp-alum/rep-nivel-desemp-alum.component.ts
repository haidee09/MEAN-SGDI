import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { GuardarDocumentoService } from '../../services/guardar-documento.service';
import { FormGroup , FormBuilder } from '@angular/forms';
import { DateFormatPipePipe } from '../../pipes/date-format-pipe.pipe';
import { DatePipe } from '@angular/common';
declare let jsPDF;

@Component({
  selector: 'app-rep-nivel-desemp-alum',
  templateUrl: './rep-nivel-desemp-alum.component.html',
  styleUrls: ['./rep-nivel-desemp-alum.component.css']
})
export class RepNivelDesempAlumComponent {

  formulario: FormGroup;
  private message: string ='';
  private campoFecha:any;
  private folio: string;
  private tipo: string;
  private categoria: string;
  private date_formattedBD: any;
  private time_formattedBD: any;

  constructor(private fb: FormBuilder, private route: Router,
    private saveDocService: GuardarDocumentoService){
    this.folio = "";
    this.tipo = "Reporte Final del Nivel de Desempeño de los Alumnos";
    this.categoria = "Reportes";
    this.campoFecha = new Date();
    this.formulario = fb.group({
      departamento: '',
      semestre: '',
      docente: '',
      NGrupos: '',
      NAsignaturas: '',
      asignatura1: '', asignatura2: '', asignatura3: '', asignatura4: '', asignatura5: '', asignatura6: '',
      carrera1:'', carrera2:'', carrera3:'', carrera4:'', carrera5:'', carrera6:'',
      A1:'', A2:'', A3:'', A4:'', A5:'', A6:'',
      B11:'', B21:'', B31:'', B41:'', B51:'', B61:'',
      B12:'', B22:'', B32:'', B42:'', B52:'', B62:'',
      C1:'', C2:'', C3:'', C4:'', C5:'', C6:'',
      D11:'', D21:'', D31:'', D41:'', D51:'', D61:'',
      D12:'', D22:'', D32:'', D42:'', D52:'', D62:'',
      E1:'', E2:'', E3:'', E4:'', E5:'', E6:'',
      F1:'', F2:'', F3:'', F4:'', F5:'', F6:'',
      G1:'', G2:'', G3:'', G4:'', G5:'', G6:'',
      asignaturasTotales: '',
      carrerasTotales: '',
      ATotales: '', B1Totales: '', B2Totales: '', CTotales: '', D1Totales: '', D2Totales: '', ETotales: '', FTotales: '', GTotales: '',
      nombreFirmaDocente: '',
      nombreFirmaJefe: ''
    })
  }
  public generarPDF() {
    this.date_formattedBD = new DateFormatPipePipe().transformDateBD(this.campoFecha);
    this.time_formattedBD = new DateFormatPipePipe().transformTimeBD(this.campoFecha);
    var imgData = 'data:image/png;base64,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';

    var doc = new jsPDF;

    doc.addImage(imgData, 'PNG', 30, 15, 60, 23);

    doc.setFont('helvetica');
    doc.setFontSize(10);

    doc.setFontType('bold');
    doc.text(50,50, 'REPORTE FINAL DEL NIVEL DE DESEMPEÑO DE LOS ALUMNOS');

    doc.setFontType('normal');
    doc.text(20,55, `
    DEPARTAMENTO DE: ____________________________________

    SEMESTRE: ____________________________________________

    PROFESOR(A): __________________________________________`);

    doc.text(24,85, 'No. DE GRUPOS ATENDIDOS: ____________   No. DE ASIGNATURAS DIFERENTES:___________');

    /*Datos*/
    doc.text(64,59, this.formulario.value.departamento);
    doc.text(55,67, this.formulario.value.semestre.toString());
    doc.text(55,75, this.formulario.value.docente);
    doc.text(85,85, this.formulario.value.NGrupos.toString());
    doc.text(172,85, this.formulario.value.NAsignaturas.toString());

    doc.rect(24, 95, 165, 54);
    doc.setLineWidth(0.35);
    doc.line(95, 101, 128, 101);
    doc.line(138, 101, 158, 101);
    doc.line(24, 107, 189, 107);
    doc.line(24, 113, 189, 113);
    doc.line(24, 119, 189, 119);
    doc.line(24, 125, 189, 125);
    doc.line(24, 131, 189, 131);
    doc.line(24, 137, 189, 137);
    doc.line(24, 143, 189, 143);

    doc.line(65, 95, 65, 149);
    doc.line(85, 95, 85, 149);
    doc.line(95, 95, 95, 149);
    doc.line(112, 101, 112, 149);
    doc.line(128, 95, 128, 149);
    doc.line(138, 95, 138, 149);
    doc.line(148, 101, 148, 149);
    doc.line(158, 95, 158, 149);
    doc.line(168, 95, 168, 149);
    doc.line(178, 95, 178, 149);

    doc.text(30,103, 'ASIGNATURA\t      CARRERA    A\t\t\t\t\t  C\t\t\t     E\tF\tG');
    doc.text(111,100, 'B\t\t\t\t   D');
    doc.text(100,105, '1° OP     2° OP');
    doc.text(34,147, 'TOTALES');

    /*Datos Asignatura*/
    doc.text(25,112, this.formulario.value.asignatura1);
    doc.text(25,118, this.formulario.value.asignatura2);
    doc.text(25,124, this.formulario.value.asignatura3);
    doc.text(25,130, this.formulario.value.asignatura4);
    doc.text(25,136, this.formulario.value.asignatura5);
    doc.text(25,142, this.formulario.value.asignatura6);

    /*Datos Carrera*/
    doc.text(75,112, this.formulario.value.carrera1);
    doc.text(75,118, this.formulario.value.carrera2);
    doc.text(75,124, this.formulario.value.carrera3);
    doc.text(75,130, this.formulario.value.carrera4);
    doc.text(75,136, this.formulario.value.carrera5);
    doc.text(75,142, this.formulario.value.carrera6);

    /*Datos A*/
    doc.text(88,112, this.formulario.value.A1.toString());
    doc.text(88,118, this.formulario.value.A2.toString());
    doc.text(88,124, this.formulario.value.A3.toString());
    doc.text(88,130, this.formulario.value.A4.toString());
    doc.text(88,136, this.formulario.value.A5.toString());
    doc.text(88,142, this.formulario.value.A6.toString());
    doc.text(88,148, this.formulario.value.ATotales.toString());

     /*Datos B 1 OP*/
    doc.text(102,112, this.formulario.value.B11.toString());
    doc.text(102,118, this.formulario.value.B21.toString());
    doc.text(102,124, this.formulario.value.B31.toString());
    doc.text(102,130, this.formulario.value.B41.toString());
    doc.text(102,136, this.formulario.value.B51.toString());
    doc.text(102,142, this.formulario.value.B61.toString());
    doc.text(102,148, this.formulario.value.B1Totales.toString());

     /*Datos B 2 OP*/
    doc.text(118,112, this.formulario.value.B12.toString());
    doc.text(118,118, this.formulario.value.B22.toString());
    doc.text(118,124, this.formulario.value.B32.toString());
    doc.text(118,130, this.formulario.value.B42.toString());
    doc.text(118,136, this.formulario.value.B52.toString());
    doc.text(118,142, this.formulario.value.B62.toString());
    doc.text(118,148, this.formulario.value.B2Totales.toString());

    /*Datos C*/
    doc.text(130,112, this.formulario.value.C1.toString());
    doc.text(130,118, this.formulario.value.C2.toString());
    doc.text(130,124, this.formulario.value.C3.toString());
    doc.text(130,130, this.formulario.value.C4.toString());
    doc.text(130,136, this.formulario.value.C5.toString());
    doc.text(130,142, this.formulario.value.C6.toString());
    doc.text(130,148, this.formulario.value.CTotales.toString());

     /*Datos D 1 OP*/
    doc.text(140,112, this.formulario.value.D11.toString());
    doc.text(140,118, this.formulario.value.D21.toString());
    doc.text(140,124, this.formulario.value.D31.toString());
    doc.text(140,130, this.formulario.value.D41.toString());
    doc.text(140,136, this.formulario.value.D51.toString());
    doc.text(140,142, this.formulario.value.D61.toString());
    doc.text(140,148, this.formulario.value.D1Totales.toString());

     /*Datos D 2 OP*/
    doc.text(150,112, this.formulario.value.D12.toString());
    doc.text(150,118, this.formulario.value.D22.toString());
    doc.text(150,124, this.formulario.value.D32.toString());
    doc.text(150,130, this.formulario.value.D42.toString());
    doc.text(150,136, this.formulario.value.D52.toString());
    doc.text(150,142, this.formulario.value.D62.toString());
    doc.text(150,148, this.formulario.value.D2Totales.toString());

    /*Datos E*/
    doc.text(160,112, this.formulario.value.E1.toString());
    doc.text(160,118, this.formulario.value.E2.toString());
    doc.text(160,124, this.formulario.value.E3.toString());
    doc.text(160,130, this.formulario.value.E4.toString());
    doc.text(160,136, this.formulario.value.E5.toString());
    doc.text(160,142, this.formulario.value.E6.toString());
    doc.text(160,148, this.formulario.value.ETotales.toString());

    /*Datos F*/
    doc.text(170,112, this.formulario.value.F1.toString());
    doc.text(170,118, this.formulario.value.F2.toString());
    doc.text(170,124, this.formulario.value.F3.toString());
    doc.text(170,130, this.formulario.value.F4.toString());
    doc.text(170,136, this.formulario.value.F5.toString());
    doc.text(170,142, this.formulario.value.F6.toString());
    doc.text(170,148, this.formulario.value.FTotales.toString());

    /*Datos G*/
    doc.text(180,112, this.formulario.value.G1.toString());
    doc.text(180,118, this.formulario.value.G2.toString());
    doc.text(180,124, this.formulario.value.G3.toString());
    doc.text(180,130, this.formulario.value.G4.toString());
    doc.text(180,136, this.formulario.value.G5.toString());
    doc.text(180,142, this.formulario.value.G6.toString());
    doc.text(180,148, this.formulario.value.GTotales.toString());

    doc.setFontSize(8);
    doc.text(20,155, `
    A = TOTAL DE ESTUDIANTES POR MATERIA
    B = No. DE ESTUDIANTES ACREDITADOS (1° OP = Primera Opción, 2° OP = Segunda Opción)
    C = % DE ESTUDIANTES ACREDITADOS
    D = No. DE ESTUDIANTES NO ACREDITADOS
    E = % DE ESTUDIANTES NO ACREDITADOS
    F = No. DE ESTUDIANTES QUE DESERTARON DURANTE EL SEMESTRE EN LA MATERIA
    G = % DE ESTUDIANTES QUE DESERTARON EN LA MATERIA


    NOTAS:
    \t1. Los estudiantes que se incluirán en la columna D son todos los estudiantes no acreditados incluyendo a los desertores.
    \t\ta. Entendiendo como estudiante desertor al que toma la desición de no presentar exámenesde regularización o
    \t\t\textraordinarios aun teniendo derecho a ellos.
    \t2. Este registro deberá de acompañarse con sus respectivos instrumentos de evaluación y listas de calificaciones que avalen
    \t\t\tlos datos aquí presentados.
    `);


    doc.setFontSize(10);
    doc.text(30,220, `
    \t\t\tDOCENTE




    ___________________________________
    `);
    doc.text(40,250, this.formulario.value.nombreFirmaDocente.toLocaleUpperCase());

    doc.text(105,220, `
    \tJEFE DEL ÁREA ACADÉMICA




      ____________________________________`);
    doc.text(125,250, this.formulario.value.nombreFirmaJefe.toLocaleUpperCase());


    doc.save('ReporteDesempeñoAlumnos.pdf');
    this.message = this.saveDocService.guardarDocumento(
      this.folio, this.tipo, this.categoria,
      this.date_formattedBD, this.time_formattedBD);
    console.log(this.message);
  }
  regresarPag(){
    this.route.navigate(['/login']);
  }
}
