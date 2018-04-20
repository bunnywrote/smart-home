import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { House } from '../models/house.class';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class MqttService {

	constructor(
		private httpClient: HttpClient
	) { }

	//getHouse(): Observable<House> {
	//	return this.httpClient.get<House>('api/house');
	//}
}