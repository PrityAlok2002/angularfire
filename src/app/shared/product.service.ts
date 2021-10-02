import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private angularfire: AngularFirestore) { }

createProduct(data:any){
    return new Promise<any>((resolve,reject)=>{
        this.angularfire.collection("product").add(data).then((res)=> resolve(res), (err)=> reject(err));
    });
}

// populateForm(product:any){
//   this..setValue(product)
// }

updateProduct(product:any){
  this.angularfire.collection("product").doc(product.payload.doc.id).set({completed: true},{merge: true});
}


deleteProduct(product:any){
  this.angularfire.collection("product").doc(product.payload.doc.id).delete();
}



getProductList(){
  return this.angularfire.collection("product").snapshotChanges();
}

}
