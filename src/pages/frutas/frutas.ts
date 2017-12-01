import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-frutas',
  templateUrl: 'frutas.html',
})
export class FrutasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public frutas: any = [ 
    {
      title: "Abacaxi",
      descricao: "O abacaxi, em Portugal também conhecido como ananás, é uma infrutescência tropical produzida pela planta de mesmo nome, caracterizada como uma planta monocotiledônea da família das bromeliáceas da subfamília Bromelioideae.",
      video: "",
      img: "./assets/imgs/frutas/abacaxi.jpg",
      letra: ""
    },
    {
      title: "Caju",
      descricao: "O caju é muitas vezes tido como o fruto do cajueiro quando, na verdade, trata-se de um pseudofruto.",
      video: "",
      img: "./assets/imgs/frutas/caju.jpg",
      letra: ""
    },
    {
      title: "Coco",
      descricao: "O coqueiro, é um membro da família Arecaceae. É a única espécie classificada no gênero Cocos.",
      video: "",
      img: "./assets/imgs/frutas/coco.jpg",
      letra: ""
    },
    {
      title: "Frutas",
      descricao: "Em termos botânicos, o fruto ou fruito é uma estrutura presente em todas as angiospermas onde as sementes são protegidas enquanto amadurecem.",
      video: "",
      img: "./assets/imgs/frutas/frutas.jpg",
      letra: ""
    },
    {
      title: "Frutas",
      descricao: "Em termos botânicos, o fruto ou fruito é uma estrutura presente em todas as angiospermas onde as sementes são protegidas enquanto amadurecem.",
      video: "",
      img: "./assets/imgs/frutas/frutas.jpg",
      letra: ""
    },
  ]

}
