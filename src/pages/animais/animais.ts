import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-animais',
  templateUrl: 'animais.html',
})
export class AnimaisPage {
  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}
  
  public animais: any = [ 
    {
      title: "Abelha",
      descricao: "Abelhas são insetos voadores, conhecidos pelo seu papel na polinização. Pertencem à ordem Hymenoptera, da superfamília Apoidea, subgrupo Anthophila, e são aparentados das vespas e formigas.",
      video: "",
      img: "./assets/imgs/animais/abelha.jpg",
      letra: ""
    },
    {
      title: "Animais",
      descricao: "Animalia, Animal ou Metazoa é um reino biológico composto por seres vivos pluricelulares, Eucariontes, heterotróficos, cujas células formam tecidos biológicos, com capacidade de responder ao ambiente.",
      video: "",
      img: "./assets/imgs/animais/animais.jpg",
      letra: ""
    },
    {
      title: "Coelho",
      descricao: "Os coelhos são mamíferos lagomorfos da família dos leporídeos, em geral dos gêneros Oryctolagus e Sylvilagus. Caracterizam-se pela cauda curta, as orelhas e patas compridas.",
      video: "",
      img: "./assets/imgs/animais/coelho.jpg",
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
      title: "Elefante",
      descricao: "Elefante é o termo genérico e popular pelo qual são denominados os membros da família Elephantidae, um grupo de mamíferos proboscídeos elefantídeos, de grande porte.",
      video: "",
      img: "./assets/imgs/animais/elefante.jpg",
      letra: ""
    },
    {
      title: "Galhinha",
      descricao: "Galinha e Galo são, respectivamente, a fêmea e o macho da espécie Gallus gallus domesticus de aves galiformes e fasianídeas. Os juvenis são chamados de frangos ou galetos, e os filhotes, de pintos, pintainhos ou pintinhos.",
      video: "",
      img: "./assets/imgs/animais/galinha.jpg",
      letra: ""
    },
    {
      title: "Gato",
      descricao: "O gato, também conhecido como gato caseiro, gato urbano ou gato doméstico, é um animal da Família dos felídeos, muito popular como animal de estimação.",
      video: "",
      img: "./assets/imgs/animais/gato.jpg",
      letra: ""
    },
    {
      title: "Gato",
      descricao: "O gato, também conhecido como gato caseiro, gato urbano ou gato doméstico, é um animal da Família dos felídeos, muito popular como animal de estimação.",
      video: "",
      img: "./assets/imgs/animais/gato.jpg",
      letra: ""
    },
    {
      title: "Girafa",
      descricao: "O termo girafa é a designação dada a hologramas artiodátilos, ruminantes, do gênero Giraffa, da família dos girafídeos, no qual constam quatro espécies.",
      video: "",
      img: "./assets/imgs/animais/girafa.jpg",
      letra: ""
    },
    {
      title: "Jacaré",
      descricao: "Jacaré é uma denominação comum às espécies de crocodilianos da família Alligatoridae, sendo muito parecidos com os crocodilos, dos quais se distinguem pela cabeça mais curta e larga.",
      video: "",
      img: "./assets/imgs/animais/jacare.jpg",
      letra: ""
    },
    {
      title: "Leão",
      descricao: "O leão [feminino: leoa] é uma espécie de mamífero carnívoro do gênero Panthera e da família Felidae.",
      video: "",
      img: "./assets/imgs/animais/leao.jpg",
      letra: ""
    },
    {
      title: "Macaco",
      descricao: "Macaco é um termo de origem africana utilizado como designação comum a todas as espécies de símios ou primatas antropoides.",
      video: "",
      img: "./assets/imgs/animais/macaco.jpg",
      letra: ""
    },
    {
      title: "Peixe",
      descricao: "Os peixes são animais vertebrados, aquáticos, tipicamente ectotérmicos, que possuem o corpo fusiforme, os membros transformados em barbatanas ou nadadeiras sustentadas por raios ósseos ou cartilaginosos.",
      video: "",
      img: "./assets/imgs/animais/peixe.JPG",
      letra: ""
    },
    {
      title: "Porco",
      descricao: "Porco é a denominação dada às diferentes espécies de mamíferos bunodontes, artiodáctilos, não ruminantes a que pertence o porco doméstico.",
      video: "",
      img: "./assets/imgs/animais/porco.jpg",
      letra: ""
    },
    {
      title: "Tartaruga",
      descricao: "Testudines é uma ordem de répteis caracterizada pela presença de uma carapaça. Por vezes são referidos como quelônios, quelónios ou testudíneos.",
      video: "",
      img: "./assets/imgs/animais/tartaruga.jpg",
      letra: ""
    },
    {
      title: "Vaca",
      descricao: "O boi é um mamífero ruminante da ordem Artiodactyla. Faz parte do grupo dos bovinos, é ungulado e apresenta dois dígitos em cada pata.",
      video: "",
      img: "./assets/imgs/animais/vaca.JPG",
      letra: ""
    }
  ]

}