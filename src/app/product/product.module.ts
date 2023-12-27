import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddProductComponent,
    ProductDashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
