import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  public posts: any = [
    {
      title: "Avião",
      descricao: "Um avião ou aeroplano é qualquer aeronave que necessita de asas fixas e motores para se sustentar no ar. Pode possuir um ou mais planos de asa, sendo estas fixas em relação ao corpo da aeronave, ou seja, que dependem do movimento do veículo como um todo para gerar sustentação aérea.",
      video: "",
      img: "./assets/imgs/transportes/aviao.JPG",
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
      title: "Coruja",
      descricao: "O termo coruja é a designação comum das aves estrigiformes, das famílias dos titonídeos e estrigídeos. Na região do Amazonas, algumas espécies também são chamadas de murutucu.",
      video: "",
      img: "./assets/imgs/animais/coruja.jpg",
      letra: ""
    },
    {
      title: "Carne",
      descricao: "Dá-se o nome de carne ou vianda ao tecido muscular dos animais, inclusive do homem. Algumas vezes, o termo se refere apenas à carne de mamíferos, ou de mamíferos e aves.",
      video: "",
      img: "./assets/imgs/alimentos/carne.jpg",
      letra: ""
    }
  ] 
}
