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
            'name': 'Açaí',
            'estabelecimentos': [
                {
                    'name': 'Açaí da Praça',
                    'endereco': 'Praça da Abadia nº 150',
                    'telefone': '99999-1126',
                    'horario': '09:00 às 22:00'
                },
                {
                    'name': 'Point do Açaí',
                    'endereco': 'Rua Campo Florido nº 215',
                    'telefone': '99895-7277',
                    'horario': '15:00 às 21:00'
                }
            ]
        },
        {
            'name': 'Lanches',
            'estabelecimentos': [
                {
                    'name': 'Skinao',
                    'endereco': 'Rua A',
                    'telefone': '3421-4466',
                    'horario': '19:00 às 04:00'
                },
                {
                    'name': 'Mega Lanche',
                    'endereco': 'Avenida Presidente Juscelino Kubitschek nº 447 ',
                    'telefone': '3429-0011',
                    'horario': '19:00 às 06:00'
                }
            ]
        },
        {
            'name': 'Pizzarias',
            'estabelecimentos': [
                {
                    'name': 'Pizzaria Tô-Ki-Tô',
                    'endereco': 'Rua José Basmadji nº 253 ',
                    'telefone': '3423-5791',
                    'horario': '19:00 às 03:00'
                }
            ]
        },
        {
            'name': 'Restaurantes',
            'estabelecimentos': [
                {
                    'name': 'Restaurante Cheiro Verde',
                    'endereco': 'Rua Domiciano Ferreira nº 445 ',
                    'telefone': '3423-6898',
                    'horario': '11:00 às 15:00'
                },
                {
                    'name': 'Restaurante Maria Fumaça',
                    'endereco': 'Praça Doutor Alcides Paula Gomes nº 105 ',
                    'telefone': '3421-5702',
                    'horario': '11:00 às 15:00'
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
