import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal-inf',
  templateUrl: 'modal-inf.html',
})
export class ModalInfPage {

  public modal: any = {
    title: this.navParams.get('title'),
    descricao: this.navParams.get('descricao'),
    video: this.navParams.get('video'),
    img: this.navParams.get('img'),
    letra: this.navParams.get('letra')
  }

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/5Y3N2Q81Dzc?list=RDVt-krQqhxbk");
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
