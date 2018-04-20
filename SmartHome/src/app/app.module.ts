import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserModule } from '@angular/platform-browser';

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

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
	hostname: 'siot.net',
	protocol: 'ws',
	//port: 14861,
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
        FloorPage
    ],
	imports: [
		MqttModule.forRoot({
			provide: MqttService,
			useFactory: mqttServiceFactory
		}),
        BrowserModule,
        IonicModule.forRoot(MyApp)],
    bootstrap: [
        IonicApp
    ],
    entryComponents: [
        MyApp,
        LoginPage,
        FloorPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        }]
})
export class AppModule { }
