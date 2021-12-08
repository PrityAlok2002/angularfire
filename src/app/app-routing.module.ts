import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {
    path:'',redirectTo:'',pathMatch:'full'
  },
  {
    path:'addproduct',component:ProductComponent
  },
  {
    path:'productlist',component:ProductListComponent
  },
  {
    path:'signIn',component:SignInComponent
  },
  {
    path:'signUp',component:SignUpComponent
  },
  {
    path:'logout',component:LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
