import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryparentComponent } from './categoryparent/categoryparent.component';
import { RouterModule } from '@angular/router';
import { CategoryRoutes } from './category-routing.module';
import { CategorylistComponent } from './categoryparent/categorylist/categorylist.component';
import { SingleventComponent } from './categoryparent/categorylist/singlevent/singlevent.component';
import { HomeModule } from "../../shared/home/home/home.module";



@NgModule({
  declarations: [
    CategoryparentComponent,
    CategorylistComponent,
    SingleventComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CategoryRoutes),
    HomeModule
]
})
export class CategoryModule { }
