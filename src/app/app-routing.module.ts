import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"home",loadChildren:()=>import("./shared/home/home/home.module").then((m)=>m.HomeModule)

  },
  {
    path:"account",loadChildren:()=>import("./feature/account/account.module").then((m)=>m.AccountModule)

  },
  {
    path:"category",loadChildren:()=>import("./feature/category/category.module").then((m)=>m.CategoryModule)

  },
  {
    path:'dashboard',loadChildren:()=>import("./feature/dashboard/dashboard.module").then((m)=>m.DashboardModule)
  },
  {
    path:"**",redirectTo:'home',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
