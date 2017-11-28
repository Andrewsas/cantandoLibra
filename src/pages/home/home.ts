import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ModalInfPage } from "../modal-inf/modal-inf";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  public post: any = 
    {
      title: "50 Reais",
      descricao: "",
      video: "https://www.youtube.com/embed/5Y3N2Q81Dzc?list=RDVt-krQqhxbk",
      img: "https://i.ytimg.com/vi/_b-FdGeNcYo/maxresdefault.jpg",
      letra: "<div><span>Bonito!</span><br><span>Que bonito hein!</span><br><span>Que cena mais linda</span><br><span>Será que eu estou atrapalhando o casalzinho aí</span></div><div><span>Que lixo!</span><br><span>'Cê 'tá de brincadeira</span><br><span>Então é aqui o seu futebol toda Quarta-feira</span></div><div><span>E por acaso esse motel</span><br><span>É o mesmo que me trouxe na lua de mel</span><br><span>É o mesmo que você me prometeu o céu</span><br><span>E agora me tirou o chão</span></div><div><span>E não precisa se vestir</span><br><span>Eu já vi tudo que eu tinha que ver aqui</span><br><span>Que decepção</span><br><span>Um a zero pra minha intuição</span></div><div><span>Não sei se dou na cara dela ou bato em você</span><br><span>Mas eu não vim atrapalhar sua noite de prazer</span><br><span>E pra ajudar pagar a dama que lhe satisfaz</span><br><span>Toma aqui uns 50 reais</span></div><div><span>Não sei se dou na cara dela ou bato em você</span><br><span>Mas eu não vim atrapalhar sua noite de prazer</span><br><span>E pra ajudar pagar a dama que lhe satisfaz</span><br><span>Toma aqui uns 50 reais</span></div><div><span>E por acaso esse motel</span><br><span>É o mesmo que me trouxe na lua de mel</span><br><span>É o mesmo que você me prometeu o céu</span><br><span>E agora me tirou o chão</span></div><div><span>E não precisa se vestir</span><br><span>Eu já vi tudo que eu tinha que ver aqui</span><br><span>Que decepção</span><br><span>Um a zero pra minha intuição</span></div><div><span>Não sei se dou na cara dela ou bato em você</span><br><span>Mas eu não vim atrapalhar sua noite de prazer</span><br><span>E pra ajudar pagar a dama que lhe satisfaz</span><br><span>Toma aqui uns 50 reais</span></div><div><span>Não sei se dou na cara dela ou bato em você</span><br><span>Mas eu não vim atrapalhar sua noite de prazer</span><br><span>E pra ajudar pagar a dama que lhe satisfaz</span><br><span>Toma aqui uns 50 reais</span></div><div><span>E pra ajudar pagar a dama que lhe satisfaz</span><br><span>Toma aqui uns 50 reais</span></div>"
    }

  public openModal(post){
    console.log('abriu modal', post);
    let myModal = this.modalCtrl.create(ModalInfPage, post);
    myModal.present();
  }
}
