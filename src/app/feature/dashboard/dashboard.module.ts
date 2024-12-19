import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GlobalComponent } from './global/global.component';
import { EventsComponent } from './events/events.component';
import { ListComponent } from './events/list/list.component';
import { AddComponent } from './events/add/add.component';
import { EditComponent } from './events/edit/edit.component';


@NgModule({
  declarations: [
    DashboardComponent,
    GlobalComponent,
    EventsComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
