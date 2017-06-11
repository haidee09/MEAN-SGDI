import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Documento } from '../../models-data/documentos/documento';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private route: Router) {
    this.route.navigate(['/administrador/inicio']);
  }
  ngOnInit() {
  }

}
