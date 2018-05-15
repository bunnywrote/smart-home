import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SiotMqttService } from '../../services/siot-mqtt.service';

import { Device } from '../../models/device.class';

import {
	IMqttMessage,
	MqttModule,
	MqttService,
	IMqttServiceOptions
} from 'ngx-mqtt';

@Component({
	selector: 'on-off-switcher',
	templateUrl: './on-off-switcher.component.html'
	//styleUrls: ['./on-off-switcher.component.scss']
})
export class OnOffSwitcherComponent implements OnInit {

	@Input() device: Device;

	private topicKnx: string = "siot/DAT/0F3A-D8FE-7BC9-0B64-3296-A28C-E88D-199F/efdf4c1e-ffd7-e253-77d0-d2bfd1d3877a";
	private message: string;

	constructor(
		private mqttService: SiotMqttService
	) {
		this.mqttService.subscribeTo(this.topicKnx).subscribe((message) => {
			this.message = message.payload.toString();

			console.log(message);
			console.log(JSON.stringify(message));

		});
	}

	ngOnInit() {
		console.log(this.device);
	}

	public toggle(): void {

		this.device.value = !this.device.value;

		console.log(this.device.value);
	}

	public publish(message: string): void {
		this.mqttService.publish(this.topicKnx, message);
	}


}