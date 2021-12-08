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
      //  productName : new FormControl("@",[Validators.email]),
      // productName : new FormControl("",[Validators.required]),

       productName : new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9!@#$%^&*()+]+$'),Validators.maxLength(5)]),
       productPrice : new FormControl("",[Validators.required,Validators.min(2)]),
       isStack : new FormControl(false,[Validators.required])

     }    
  );

  
  constructor(public ProductService : ProductService) { }

  ngOnInit(): void {
    
  }

   addProduct(){
     var data = this.productForm.value;

     this.ProductService.createProduct(data).then((res)=>{
       
       console.log("Added in firestore"+res);
       console.log(res)
       

    this.productForm = new FormGroup(
      {
        productName : new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9!@#$%^&*()+]+$'),Validators.maxLength(5)]),
        productPrice : new FormControl("",[Validators.required,Validators.min(2)]),
        isStack : new FormControl(false,[Validators.required])
      }    
   );

      })
    
   }

}
