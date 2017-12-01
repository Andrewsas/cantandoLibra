import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AlimentosPage } from "../pages/alimentos/alimentos";
import { AnimaisPage } from "../pages/animais/animais";
import { CoresPage } from "../pages/cores/cores";
import { MusicasPage } from "../pages/musicas/musicas";
import { TransportesPage } from "../pages/transportes/transportes";
import { FrutasPage } from "../pages/frutas/frutas";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openHome(){
    this.nav.setRoot(HomePage);
  }

  openAlimentos(){
    this.nav.setRoot(AlimentosPage);
  }

  openAnimais(){
    this.nav.setRoot(AnimaisPage);
  }

  openCores(){
    this.nav.setRoot(CoresPage);
  }

  openMusicas(){
    this.nav.setRoot(MusicasPage);
  }

  openTransportes(){
    this.nav.setRoot(TransportesPage);
  }

  openFrutas(){
    this.nav.setRoot(FrutasPage);
  }

}
