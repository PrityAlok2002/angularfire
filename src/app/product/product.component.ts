import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productForm = new FormGroup(
     {
       productName : new FormControl("",[Validators.required]),
       productPrice : new FormControl("",[Validators.required]),
       isStack : new FormControl(false,[Validators.required])
     }    
  );

  
  constructor(private ProductService : ProductService) { }

  ngOnInit(): void {
  }

   addProduct(){
     var data = this.productForm.value;

     this.ProductService.createProduct(data).then((res)=>{
       console.log("Added in firestore");
       
     }
     )
   }

}
