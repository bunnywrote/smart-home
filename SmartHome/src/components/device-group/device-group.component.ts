import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DeviceGroup } from '../../models/device-group.class';

@Component({
	selector: 'device-group',
	templateUrl: './device-group.component.html'
	//styleUrls: ['./on-off-switcher.component.scss']
})
export class DeviceGroupComponent implements OnInit {

	@Input() group: DeviceGroup;

	ngOnInit() {
		console.log("group");
		console.log(this.group);
	}
}