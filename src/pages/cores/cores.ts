import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cores',
  templateUrl: 'cores.html',
})
export class CoresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public cores: any = [ 
    {
      title: "Amarelo",
      descricao: "O amarelo é uma cor-pigmento primária e cor-luz secundária, resultado da sobreposição das cores verde e vermelho.",
      video: "",
      img: "./assets/imgs/cor/amarelo.jpg",
      letra: ""
    },
    {
      title: "Azul",
      descricao: "O azul é uma das três cores-luz primárias, e cor-pigmento secundária, resultado da sobreposição dos pigmentos ciano e magenta.",
      video: "",
      img: "./assets/imgs/cor/azul.jpg",
      letra: ""
    },
    {
      title: "Azul",
      descricao: "O azul é uma das três cores-luz primárias, e cor-pigmento secundária, resultado da sobreposição dos pigmentos ciano e magenta.",
      video: "",
      img: "./assets/imgs/cor/azul.jpg",
      letra: ""
    },
    {
      title: "Branca",
      descricao: "A cor branca é a junção de todas as cores do espectro de cores. É definida como a cor da luz em cores-pigmento. É a cor que reflete todos os raios luminosos, não absorvendo nenhum e por isso aparecendo como clareza máxima.",
      video: "",
      img: "./assets/imgs/cor/branca.jpg",
      letra: ""
    },
    {
      title: "Cinza",
      descricao: "Cinza ou cinzento, ou ainda gris, é a cor intermediária entre o branco e preto. Em um modelo subtrativo de cores, ou seja, de emprego de pigmentos, é obtido pela adição de preto.",
      video: "",
      img: "./assets/imgs/cor/cinza.jpg",
      letra: ""
    },
    {
      title: "Cores",
      descricao: "A cor é uma percepção visual provocada pela ação de um feixe de fótons sobre células especializadas da retina, que transmitem através de informação pré-processada ao nervo óptico, impressões para o sistema nervoso.",
      video: "",
      img: "./assets/imgs/cor/cores.jpg",
      letra: ""
    },
    {
      title: "Laranja",
      descricao: "A cor laranja, cor de laranja, cor abóbora, cor de abóbora, alaranjado, laranja ou abóbora, é uma cor terciária nos sistemas RGB e CMYK, formada pelo vermelho e o amarelo que, no espectro visível.",
      video: "",
      img: "./assets/imgs/cor/laranja.jpg",
      letra: ""
    },
    {
      title: "Marrom",
      descricao: "Marrom ou castanho é a cor das castanhas, de diversos mamíferos e dos olhos da maioria das pessoas. Castanho é também o nome usado para designar a madeira do castanheiro.",
      video: "",
      img: "./assets/imgs/cor/marrom.jpg",
      letra: ""
    },
    {
      title: "Preto",
      descricao: "O preto é a cor mais escura, sendo o resultado da falta parcial ou completa da luz. É o oposto exato do branco. Como branco e o cinza, é uma cor acromática, literalmente, uma cor sem cor ou matiz.",
      video: "",
      img: "./assets/imgs/cor/preto.jpg",
      letra: ""
    },
    {
      title: "Rosa",
      descricao: "Rosa é uma cor intermediária entre magenta e vermelho, sendo assim uma cor quente.",
      video: "",
      img: "./assets/imgs/cor/rosa.jpg",
      letra: ""
    },
    {
      title: "Roxa",
      descricao: "O termo púrpura atribui-se a um leque de tons entre o vermelho e o azul. Obtém-se misturando as cores primárias vermelho e azul.",
      video: "",
      img: "./assets/imgs/cor/roxa.jpg",
      letra: ""
    },
    {
      title: "Verde",
      descricao: "O verde é o número de cores semelhantes evocadas pela luz constituída por comprimentos de onda, visíveis pelo olho humano, aproximadamente de 510 nm. Os comprimentos de onda mais longos do que o verde é o amarelo e mais curto o azul.",
      video: "",
      img: "./assets/imgs/cor/verde.jpg",
      letra: ""
    }
    
  ]


}
