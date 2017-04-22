import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { AppModule } from '../app.module';
import { HeaderFooterModule } from '../headerfooter.module';
import { LoginComponent } from './login/login.component';
//import { HeaderComponent } from '../header/header.component';
//import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    //LoginRoutingModule
    FormsModule,
    HeaderFooterModule
  ],
  declarations: [
    LoginComponent
    //HeaderComponent,
    //FooterComponent
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
