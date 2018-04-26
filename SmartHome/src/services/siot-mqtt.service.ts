import { Injectable } from '@angular/core';
import {
	IMqttMessage,
	MqttModule,
	MqttService,
	IMqttServiceOptions
} from 'ngx-mqtt';

import { House } from '../models/house.class';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class SiotMqttService {

	constructor(
		private _mqttService: MqttService
	) {}

	public subscribeTo(topic: string): Observable<IMqttMessage> {
		return this._mqttService.observe(topic);
	}

	public publish(topic: string, message: string) {
		this.unsafePublish(topic, message);
	}

	private unsafePublish(topic: string, message: string): void {
		console.log(topic);
		console.log(message);
		this._mqttService.unsafePublish(topic, message);
	}

	//getHouse(): Observable<House> {
	//	return this.httpClient.get<House>('api/house');
	//}
}