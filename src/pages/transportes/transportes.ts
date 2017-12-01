import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-transportes',
  templateUrl: 'transportes.html',
})
export class TransportesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  public transportes: any = [ 
    {
      title: "Avião",
      descricao: "Um avião ou aeroplano é qualquer aeronave que necessita de asas fixas e motores para se sustentar no ar. Pode possuir um ou mais planos de asa, sendo estas fixas em relação ao corpo da aeronave, ou seja, que dependem do movimento do veículo como um todo para gerar sustentação aérea.",
      video: "",
      img: "./assets/imgs/transportes/aviao.JPG",
      letra: ""
    },
    {
      title: "Bicicleta",
      descricao: "A bicicleta é um veículo de duas rodas presas a um quadro, movido pelo esforço do próprio usuário através de pedais, sendo assim um velocípede de duas rodas.",
      video: "",
      img: "./assets/imgs/transportes/bicicleta.jpg",
      letra: ""
    },
    {
      title: "Caminhão",
      descricao: "Um camião ou caminhão é um veículo terrestre para transporte de bens. Ao contrário dos automóveis, onde é comum serem construídos em uma estrutura única.",
      video: "",
      img: "./assets/imgs/transportes/caminhao.jpg",
      letra: ""
    },
    {
      title: "Carro",
      descricao: "Automóvel ou carro é um veículo motorizado com quatro rodas, existindo quem defenda que esta definição englobe também os motociclos que são veículos motorizados com duas rodas.",
      video: "",
      img: "./assets/imgs/transportes/carro.JPG",
      letra: ""
    },
    {
      title: "Caroça",
      descricao: "Carroça é um meio de transporte que antecede ao advento dos veículos a vapor. Movida por tração humana ou animal, a carroça era o meio de transporte mais utilizado para os deslocamentos de carga de um lugar a outro.",
      video: "",
      img: "./assets/imgs/transportes/carroca.jpg",
      letra: ""
    },
    {
      title: "Helicoptero",
      descricao: "Helicóptero é um tipo de aeronave de asas diagonais, mais pesada que o ar, propulsada por um ou mais rotores horizontais maiores que, quando girados pelo motor, criam sustentação e propulsão.",
      video: "",
      img: "./assets/imgs/transportes/helicoptero.jpg",
      letra: ""
    },
    {
      title: "Meio de Transporte",
      descricao: "Os meios de transporte são responsáveis pelo deslocamento de pessoas, animais, matérias-primas e mercadorias, sendo de fundamental importância para a infraestrutura e a economia de um determinado local.",
      video: "",
      img: "./assets/imgs/transportes/meio_transporte.JPG",
      letra: ""
    },
    {
      title: "Moto",
      descricao: "Motociclo ou motocicleta, é um veículo de duas rodas e tracção traseira - salvo raras excepções - com um motor que propicia sua auto-locomoção capaz de desenvolver velocidade de cruzeiro com segurança e conforto.",
      video: "",
      img: "./assets/imgs/transportes/moto.jpg",
      letra: ""
    },
    {
      title: "Ônibus",
      descricao: "Um ônibus ou autocarro, machimbombo, toca-toca, otocarro ou microlete é um veículo motorizado terrestre designado para o transporte de pessoas. Ônibus podem ter a capacidade de carregar até 300 passageiros.",
      video: "",
      img: "./assets/imgs/transportes/onibus.JPG",
      letra: ""
    },
    {
      title: "Táxi",
      descricao: "Um táxi é um automóvel destinado ao transporte de passageiros e provido de um taxímetro.",
      video: "",
      img: "./assets/imgs/transportes/taxi.JPG",
      letra: ""
    },
    {
      title: "Trem",
      descricao: "Um trem ou comboio é um transporte ferroviário que consiste num ou vários veículos, ligados entre si e capazes de se movimentarem sobre trilhos ou carris, para transportarem pessoas ou cargas.",
      video: "",
      img: "./assets/imgs/transportes/trem.jpg",
      letra: ""
    }
  ]
}
