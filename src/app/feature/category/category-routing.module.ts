import { Routes } from "@angular/router";
import { CategoryparentComponent } from "./categoryparent/categoryparent.component";
import { CategorylistComponent } from "./categoryparent/categorylist/categorylist.component";

export const CategoryRoutes: Routes = [
    {
        path:"",component:CategoryparentComponent,
        children:[
            {path:":name",component:CategorylistComponent}
        ]    
    }
  ];
  