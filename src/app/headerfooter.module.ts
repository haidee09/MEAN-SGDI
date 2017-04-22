import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
export { HeaderComponent } from './header/header.component';
export { FooterComponent } from './footer/footer.component';
@NgModule({
  imports: [
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class HeaderFooterModule { }