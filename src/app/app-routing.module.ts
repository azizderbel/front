import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';


const routes: Routes = [
  
  {
    path:'update/:id',component:DetailProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
