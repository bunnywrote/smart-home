import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserModule } from '@angular/platform-browser';

import { SiotMqttService } from '../services/siot-mqtt.service';

import { Observable } from 'rxjs/Observable';

import {
	IMqttMessage,
	MqttModule,
	MqttService,
	IMqttServiceOptions
} from 'ngx-mqtt';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { FloorPage } from '../pages/floor/floor';
import { OnOffSwitcherComponent } from '../components/on-off-switcher/on-off-switcher.component';

//import { SharedModule } from '../components/shared.module';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
	hostname: 'siot.net',
	protocol: 'ws',
	port: 9001,
	path: ''
	
	//hostname: 'iot.eclipse.org',
	//port: 80,
	//path: '/ws'
};

export function mqttServiceFactory() {
	return new MqttService(MQTT_SERVICE_OPTIONS);
}

@NgModule({
    declarations: [
        MyApp,
        LoginPage,
		FloorPage,
	//	OnOffSwitcherComponent
	],
	imports: [
//		SharedModule,
		MqttModule.forRoot({
			provide: MqttService,
			useFactory: mqttServiceFactory
		}),
        BrowserModule,
		IonicModule.forRoot(MyApp),
	],
    bootstrap: [
        IonicApp
    ],
    entryComponents: [
        MyApp,
        LoginPage,
		FloorPage
	],
	providers: [
		SiotMqttService,
        StatusBar,
        SplashScreen,
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        }]
})
export class AppModule { }
