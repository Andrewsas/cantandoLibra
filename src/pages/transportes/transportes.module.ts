import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransportesPage } from './transportes';

@NgModule({
  declarations: [
    TransportesPage,
  ],
  imports: [
    IonicPageModule.forChild(TransportesPage),
  ],
})
export class TransportesPageModule {}
