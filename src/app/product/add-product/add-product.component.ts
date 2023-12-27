import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Product {
 id: number;
 name: string;
 price: number;
}

@Component({
 selector: 'app-add-product',
 templateUrl: './add-product.component.html',
 styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 addProductForm!: FormGroup;
 product!: Product;

 constructor(private formBuilder: FormBuilder) { }

 ngOnInit(): void {
     this.addProductForm = this.formBuilder.group({
         id: ['', Validators.required],
         name: ['', Validators.required],
         price: ['', Validators.required]
     });
 }

 addProduct(): void {
     if (this.addProductForm.valid) {
         this.product = this.addProductForm.value;
         console.log(this.product);
     } else {
         console.error("error");
     }
 }
}
