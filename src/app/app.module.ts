import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuModalPage } from '../pages/menu-modal/menu-modal';
//import { PdfDisplayPage } from '../pages/pdf-display/pdf-display';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuModalPage
    //,PdfDisplayPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuModalPage
    //,PdfDisplayPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
