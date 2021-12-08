import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : any;
  updatedProduct : any;
  // productForm: any;
  
  constructor(public productService : ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
    // this.getByID();
    
  }

getAllProducts()
{ 
  
  this.productService.getProductList().subscribe((res=>{
    this.products = res;
    console.log(res);
  }));  

}

// getByID()
// {
  
//   var a = this.productService.getProductByID().subscribe((res=>{
//     this.updatedProduct = res;
//   console.log(a);  
//   console.log('checking')
//   }))
// }

}


