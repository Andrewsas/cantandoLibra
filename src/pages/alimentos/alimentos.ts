import { Component } from '@angular/core';
import { IonicPage,} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-alimentos',
  templateUrl: 'alimentos.html',
})
export class AlimentosPage {

  constructor() {}
  
  public alimentos: any = [ 
    {
      title: "Alimetos",
      descricao: "A alimentação é o processo pelo qual os organismos obtêm e assimilam alimentos ou nutrientes para as suas funções vitais, incluindo o crescimento, movimento, reprodução e manutenção da temperatura do corpo.",
      video: "",
      img: "./assets/imgs/alimentos/alimentos.jpg",
      letra: ""
    },
    {
      title: "Arroz",
      descricao: "O arroz é uma planta da família das gramíneas que alimenta mais da metade da população humana do mundo. É a terceira maior cultura cerealífera do mundo, apenas ultrapassada pelas de milho e trigo.",
      video: "",
      img: "../assets/imgs/alimentos/arroz.jpg",
      letra: ""
    },
    {
      title: "Café",
      descricao: "O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalmente quente, mas também pode ser consumido gelado.",
      video: "",
      img: "../assets/imgs/alimentos/cafe.png",
      letra: ""
    },
    {
      title: "Carne",
      descricao: "Dá-se o nome de carne ou vianda ao tecido muscular dos animais, inclusive do homem. Algumas vezes, o termo se refere apenas à carne de mamíferos, ou de mamíferos e aves.",
      video: "",
      img: "./assets/imgs/alimentos/carne.jpg",
      letra: ""
    },
    {
      title: "Feijão",
      descricao: "Feijão é um nome comum para uma grande variedade de sementes de plantas de alguns gêneros da família Fabaceae. Proporciona nutrientes essenciais como proteínas, ferro, cálcio, vitaminas, carboidratos e fibras.",
      video: "",
      img: "./assets/imgs/alimentos/feijao.jpg",
      letra: ""
    },
    {
      title: "Manteiga",
      descricao: "A manteiga é um produto do leite, batido até se transformar numa emulsão de água em gordura, que pode ser usada, por exemplo, sobre fatias de pão ou biscoitos, ou ainda para cozinhar.",
      video: "",
      img: "./assets/imgs/alimentos/manteiga.jpg",
      letra: ""
    },
    {
      title: "Ovo",
      descricao: "Do ponto de vista alimentício, o Ovo é um alimento de origem animal, podendo ser de diversas espécies animais, incluindo aves, répteis, anfíbios e peixes.",
      video: "",
      img: "./assets/imgs/alimentos/ovo.jpg",
      letra: ""
    },
    {
      title: "Pão",
      descricao: "Pão é um alimento elaborado com farinha, geralmente de trigo ou outro cereal, água e sal, formando uma massa com uma consistência elástica que permite dar-lhe várias formas.",
      video: "",
      img: "./assets/imgs/alimentos/pao.jpg",
      letra: ""
    },
    {
      title: "Queijo",
      descricao: "Queijo é um alimento sólido feito a partir do leite de vacas, cabras, ovelhas, búfalas e/ou outros mamíferos.",
      video: "",
      img: "./assets/imgs/alimentos/queijo.jpg",
      letra: ""
    },
    {
      title: "Sorvete",
      descricao: "Sorvete ou gelado é uma sobremesa gelada à base de lacticínios, como leite ou nata, à qual é adicionada fruta ou outros ingredientes e sabores.",
      video: "",
      img: "./assets/imgs/alimentos/sorvete.JPG",
      letra: ""
    }
  ]
}