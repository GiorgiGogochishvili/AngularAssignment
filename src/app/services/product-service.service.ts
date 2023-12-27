import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product/product';

@Injectable({
 providedIn: 'root'
})
export class ProductService {
 private products = new BehaviorSubject<Product[]>([]);

 constructor() { }


}
