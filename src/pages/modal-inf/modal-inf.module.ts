import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalInfPage } from './modal-inf';

@NgModule({
  declarations: [
    ModalInfPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalInfPage),
  ],
})
export class ModalInfPageModule {}
