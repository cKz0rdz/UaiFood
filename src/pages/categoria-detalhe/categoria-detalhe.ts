import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EstabelecimentoPage } from '../estabelecimento/estabelecimento';

/**
 * Generated class for the CategoriaDetalhePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-categoria-detalhe',
  templateUrl: 'categoria-detalhe.html',
})
export class CategoriaDetalhePage {
  categoria;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.categoria = navParams.get('categoria');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaDetalhePage');
  }

  itemSelected(item) {
    console.log("Selected Item", item.name);
    this.navCtrl.push(EstabelecimentoPage, {'estabelecimento': item});
  }

}
