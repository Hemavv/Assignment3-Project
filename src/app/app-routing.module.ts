import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {CollectionsComponent}from './collections/collections.component';
import { HomeComponent } from './home/home.component';
import {AddcartComponent} from './addcart/addcart.component';
import { Imagemap1Component } from './imagemap1/imagemap1.component';
import { Imagemap2Component } from './imagemap2/imagemap2.component';
import { ShopComponent } from './shop/shop.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SummaryuserComponent } from './summaryuser/summaryuser.component';
import { SummaryadminComponent } from './summaryadmin/summaryadmin.component';

const routes:Routes=[
   {path:'',component:LoginComponent},
   {path:'home',component:HomeComponent},
   {path:'collections',component:CollectionsComponent},
   {path:'addcart',component:AddcartComponent },
   {path:'imagemap1',component:Imagemap1Component},
   {path:'imagemap2',component:Imagemap2Component},
   {path:'shop',component:ShopComponent},
  
   {path:'signup',component:SignupComponent},
   {path:'summaryuser',component:SummaryuserComponent},
   {path:'summaryadmin',component:SummaryadminComponent} 
 ];

@NgModule({
  
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})


export class AppRoutingModule { 

}

