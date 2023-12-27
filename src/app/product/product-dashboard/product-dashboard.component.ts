import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-service.service';
import { Product } from '../product';

@Component({
 selector: 'app-product-dashboard',
 templateUrl: './product-dashboard.component.html',
 styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
 ngOnInit(): void {
   throw new Error('Method not implemented.');
 }
 products: Product[] = [];
}
