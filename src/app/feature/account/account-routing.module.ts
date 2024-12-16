import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { UsertypeComponent } from './component/usertype/usertype.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MyaccountComponent } from './component/myaccount/myaccount.component';

export const raccountoutes: Routes = [
  {path:"",component:AccountComponent,
    children:[
      {path:"type", component:UsertypeComponent},
      {path:"login",component:LoginComponent},
      {path:"register",component:RegisterComponent},
      {path:"myaccount",component:MyaccountComponent}
    ]
  }
];


export class AccountRoutingModule { }
