import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlimentosPage } from "../pages/alimentos/alimentos";
import { AnimaisPage } from "../pages/animais/animais";
import { CoresPage } from "../pages/cores/cores";
import { FrutasPage } from "../pages/frutas/frutas";
import { MusicasPage } from "../pages/musicas/musicas";
import { TransportesPage } from "../pages/transportes/transportes";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlimentosPage,
    AnimaisPage,
    CoresPage,
    FrutasPage,
    MusicasPage,
    TransportesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlimentosPage,
    AnimaisPage,
    CoresPage,
    FrutasPage,
    MusicasPage,
    TransportesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
