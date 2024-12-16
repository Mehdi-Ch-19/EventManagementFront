import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {raccountoutes} from './account-routing.module'
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { UsertypeComponent } from './component/usertype/usertype.component';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { MyaccountComponent } from './component/myaccount/myaccount.component';
import { InfoComponent } from './component/myaccount/info/info.component';

@NgModule({
  declarations: [
    AccountComponent,
    UsertypeComponent,
    LoginComponent,
    RegisterComponent,
    MyaccountComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(raccountoutes),
    ReactiveFormsModule
    
  ]
})
export class AccountModule { }
