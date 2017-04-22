import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderFooterModule } from '../headerfooter.module';
import { RegisterComponent } from './register/register.component'
//import { HeaderComponent } from '../app.module';
//import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderFooterModule
  ],
  declarations: [
    RegisterComponent,
    //HeaderComponent,
    //FooterComponent
  ],
  exports:[
    RegisterComponent
  ]
})
export class RegisterModule { }
