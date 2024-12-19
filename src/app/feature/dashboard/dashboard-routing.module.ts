import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GlobalComponent } from './global/global.component';
import { EventsComponent } from './events/events.component';
import { ListComponent } from './events/list/list.component';
import { AddComponent } from './events/add/add.component';
import { EditComponent } from './events/edit/edit.component';

const routes: Routes = [
  {path:"",component:DashboardComponent,
     children:[
        {
          path:" ",component:GlobalComponent
        },
        {
          path:"events",component:EventsComponent,
          children:[
            {
              path:"",component:ListComponent
            },
            {
              path:"add",component:AddComponent
            },
            {
              path:"edit/:id",component:EditComponent
            }
          ]
        }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
