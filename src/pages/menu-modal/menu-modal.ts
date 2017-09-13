import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Platform } from 'ionic-angular';

/*
  Generated class for the MenuModalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu-modal',
  templateUrl: 'menu-modal.html'
})
export class MenuModalPage {
	
  private menu:any[];
  private titre: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
           public viewCtrl: ViewController, public platform: Platform) {
    this.titre = navParams.get('titre');
    //console.log('Titre', this.titre);
    this.menu = navParams.get('menu');
    //console.log('SousMenu', this.menu);
    platform.registerBackButtonAction((event) => {
        this.dismiss(null);
      }, 100);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MenuModalPagePage');
  }

   dismiss(lien) {
   this.viewCtrl.dismiss(lien);
 }

}
