import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : any;
  
  constructor(public productService : ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();

    
  }

getAllProducts()
{ 
  
  this.productService.getProductList().subscribe((res=>{
    this.products = res;
  }))

  

  

}



}
