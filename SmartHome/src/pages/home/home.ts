import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { FloorPage } from '../floor/floor';

import {HouseService} from '../../services/house.service';
import {SiotMqttService} from '../../services/siot-mqtt.service';

import { House } from '../../models/house.class';
import { Floor } from '../../models/floor.class';
import { Unit } from '../../models/unit.class';
import { Room } from '../../models/room.class';

import {
	IMqttMessage,
	MqttModule,
	MqttService,
	IMqttServiceOptions
} from 'ngx-mqtt';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    private navCtrl: NavController;
	private house: House;

	private subscription: any;
	public message: string;

	private topic1: string = "siot/DAT/0F3A-D8FE-7BC9-0B64-3296-A28C-E88D-199F/507fd9cd-102e-fed6-af60-25ef4741822e";
	private topic2: string = "siot/DAT/0F3A-D8FE-7BC9-0B64-3296-A28C-E88D-199F/b972d0d2-13b0-86b0-5fb0-393b251d80fa";

	private topicKnx: string = "siot/DAT/0F3A-D8FE-7BC9-0B64-3296-A28C-E88D-199F/efdf4c1e-ffd7-e253-77d0-d2bfd1d3877a";

	private topic3: string = "lol";

    constructor(
        navCtrl: NavController,
        navParams: NavParams,
		private houseService: HouseService,
		private mqttService: SiotMqttService
    ) {
        this.navCtrl = navCtrl;
		this.getHouse();

		this.mqttService.subscribeTo(this.topicKnx).subscribe((message) => {
			this.message = message.payload.toString();

			console.log(message);
			console.log(JSON.stringify(message));

		});

		//setInterval(() => { this.mqttService.publish(this.topicKnx, "{'knx_textual':'on','val':1}")}, 5000);
		//setInterval(() => { this.mqttService.publish(this.topicKnx, "{'knx_textual':'off','val':0}")}, 1000);
	}


	public testPublish(value: boolean): void {

		console.log(value);

		if (value) {
			this.mqttService.publish(this.topicKnx, "{'knx_textual':'on','val':1}");
			return;
		}

		this.mqttService.publish(this.topicKnx, "{'knx_textual':'off','val':0}");
	}

	public publish(message: string): void {
		this.mqttService.publish(this.topic1, message);
		//this.unsafePublish(this.topic2, "hello SIOT");
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

	private log(msg: string): void {
		console.log(msg);
	}
}