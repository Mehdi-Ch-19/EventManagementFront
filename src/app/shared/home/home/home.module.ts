import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Homeroutes} from './home-routing.module'
import { EventlistComponent } from './component/eventlist/eventlist.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { MonthtoNamePipe } from '../../../core/pipes/month.pipe';
import { HourPmOrAm } from '../../../core/pipes/HourPmOrAm.pipe';
import { DayPipe } from '../../../core/pipes/DayPipe.pipe';


@NgModule({
  declarations: [
    EventlistComponent,
    HomeComponent,
    MonthtoNamePipe,
    HourPmOrAm,
    DayPipe
  ],
  imports: [
    CommonModule,
    
    RouterModule.forChild(Homeroutes)
  ]
})
export class HomeModule { }
