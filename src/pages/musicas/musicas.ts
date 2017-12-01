import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-musicas',
  templateUrl: 'musicas.html',
})
export class MusicasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public musicas: any = [ 
    {
      title: "50 Reais",
      descricao: "Part. Maiara e Maraísa.",
      video: "",
      img: "../assets/50_Reais.mp4",
      letra: ""
    }
    
  ]

}
