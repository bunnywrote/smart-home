import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Floor } from '../../models/floor.class';

@IonicPage()
@Component({
  selector: 'page-floor',
  templateUrl: 'floor.html',
})
export class FloorPage {

    floor: Floor;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    )
    {
        this.floor = this.navParams.get('floor');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FloorPage');
    }

}
