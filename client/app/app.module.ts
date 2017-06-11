import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { DocumentosService } from './services/documentos.service';
import { GuardarDocumentoService } from './services/guardar-documento.service';
import { BusquedaAdminService } from './services/busqueda-admin.service';
//import { NgxPaginationModule } from 'ngx-pagination';
//import { DateFormatPipePipe } from './pipes/date-format-pipe.pipe';
//import { DatePipe } from '@angular/common';
import { LoginModule } from './login/login.module';
import { RegisterModule} from './register/register.module';

/*Tendremos que añadir los componentes al atributo declarations de @NgModule
para poder utilizar las directivas que genera cada componente*/
@NgModule({
  declarations: [
    AppComponent,
    //DateFormatPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    CommonModule,
  //  NgxPaginationModule
  ],
  exports:[
    AppComponent,
  ],
  providers: [AuthService, DocumentosService, GuardarDocumentoService, BusquedaAdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
