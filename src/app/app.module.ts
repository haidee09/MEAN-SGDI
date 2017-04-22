import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';

import { LoginModule } from './login/login.module';
import { RegisterModule} from './register/register.module';
/*Tendremos que añadir los componentes al atributo declarations de @NgModule
para poder utilizar las directivas que genera cada componente*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule
  ],
  exports:[
    AppComponent,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
