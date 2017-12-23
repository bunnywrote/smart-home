import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HouseService } from '../../services/house.service';
import { InMemoryDataService } from '../../services/in-memory-data.service';

import { HomePage } from './home';

@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        HttpClientModule,
        IonicPageModule.forChild(HomePage),
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    providers: [
        HouseService
    ],
    exports: [
        HomePage,
    ]
})
export class HomePageModule { }
