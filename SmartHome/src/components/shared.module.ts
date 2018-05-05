import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HouseService } from '../../services/house.service';
import { InMemoryDataService } from '../../services/in-memory-data.service';

import { HomePage } from './home';
import { DeviceGroupComponent } from './device-group/device-group.component';
import { OnOffSwitcherComponent } from './on-off-switcher/on-off-switcher.component';

@NgModule({
	declarations: [
		DeviceGroupComponent,
		OnOffSwitcherComponent
	],
	imports: [
		//HttpClientModule,
		//IonicPageModule.forChild(HomePage),
		//HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
	],
	providers: [
	],
	exports: [
		//HomePage,
	]
})
export class SharedModule { }
