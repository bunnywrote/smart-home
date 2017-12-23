import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { FloorPage } from '../floor/floor';

import {HouseService} from '../../services/house.service';

import { House } from '../../models/house.class';
import { Floor } from '../../models/floor.class';
import { Unit } from '../../models/unit.class';
import { Room } from '../../models/room.class';


@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    private navCtrl: NavController;
    private house: House;

    constructor(
        navCtrl: NavController,
        navParams: NavParams,
        private houseService: HouseService
    ) {
        this.navCtrl = navCtrl;
        this.getHouse();
    }

    public goTo(component: string): void {
        this.navCtrl.push(LoginPage);
    }

    public onLink(url: string): void {
        window.open(url);
    }

    public getHouse(): void {
        this.houseService.getHouse()
            .subscribe(Response => {
                    console.log(Response);
                    this.house = Response;});
    }

    public floorSelected(floor: Floor): void {
        this.navCtrl.push(FloorPage, {floor: floor});
    }
}