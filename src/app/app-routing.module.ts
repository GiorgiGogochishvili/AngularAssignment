import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDashboardComponent } from './product/product-dashboard/product-dashboard.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'notFound', component: NotFoundComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'productDashboard', component: ProductDashboardComponent },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
