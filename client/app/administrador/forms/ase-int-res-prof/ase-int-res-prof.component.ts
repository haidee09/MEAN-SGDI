import { Component } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { DateFormatPipePipe } from '../../../pipes/date-format-pipe.pipe';
import { DatePipe } from '@angular/common';
declare let jsPDF;

@Component({
  selector: 'app-ase-int-res-prof',
  templateUrl: './ase-int-res-prof.component.html',
  styleUrls: ['./ase-int-res-prof.component.css']
})
export class AseIntResProfComponent{

  constructor() { }

  ngOnInit() {
  }

}
