import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriaDetalhePage } from '../categoria-detalhe/categoria-detalhe';

@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})

export class CategoriaPage {
/* Mostra uma lista com as categorias de estabelecimentos comerciais*/
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
        {
            'name': 'Lanches',
            'estabelecimentos': [
                {
                    'name': 'Skinao 1',
                    'endereco': 'Rua A',
                    'telefone': '3421-4466',
                    'horario': '19:00 até 04:00'
                }
            ]
        },
        {
            'name': 'Pizzarias',
            'estabelecimentos': [
                {
                    'name': 'Skinao 2',
                    'endereco': '',
                    'telefone': '',
                    'horario': ''
                }
            ]
        },
        {
            'name': 'Restaurantes',
            'estabelecimentos': [
                {
                    'name': 'Skinao 3',
                    'endereco': '',
                    'telefone': '',
                    'horario': ''
                }
            ]
        }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
  }

  itemSelected(item) {
    console.log("Selected Item", item.name);
    this.navCtrl.push(CategoriaDetalhePage, {'categoria': item});
  }

}
