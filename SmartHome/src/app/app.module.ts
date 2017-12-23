import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserModule } from '@angular/platform-browser';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { FloorPage } from '../pages/floor/floor';

@NgModule({
    declarations: [
        MyApp,
        LoginPage,
        FloorPage
    ],
    imports: [
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
