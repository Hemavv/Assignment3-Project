import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {CollectionsComponent}from './collections/collections.component';
import { HomeComponent } from './home/home.component';
import { Imagemap1Component } from './imagemap1/imagemap1.component';
import { Imagemap2Component } from './imagemap2/imagemap2.component';
import { Shop1Component } from './shop1/shop1.component';
import { Shop2Component } from './shop2/shop2.component';
import { Shop3Component } from './shop3/shop3.component';
import { Shop4Component } from './shop4/shop4.component';
import { Shop5Component } from './shop5/shop5.component';
import { Shop6Component } from './shop6/shop6.component';
import { Shop7Component } from './shop7/shop7.component';
import { Shop8Component } from './shop8/shop8.component';
import {AddcartComponent} from './addcart/addcart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SummaryuserComponent } from './summaryuser/summaryuser.component';
import { SummaryadminComponent } from './summaryadmin/summaryadmin.component';



const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'collections',component:CollectionsComponent},
  {path:'imagemap1',component:Imagemap1Component},
  {path:'imagemap2',component:Imagemap2Component},
  {path:'shop1',component:Shop1Component},
  {path:'shop2',component:Shop2Component},
  {path:'shop3',component:Shop3Component},
  {path:'shop4',component:Shop4Component},
  {path:'shop5',component:Shop5Component},
  {path:'shop6',component:Shop6Component},
  {path:'shop7',component:Shop7Component},
  {path:'shop8',component:Shop8Component},
  {path:'addcart',component:AddcartComponent },
  {path:'signup',component:SignupComponent},
  {path:'summaryuser',component:SummaryuserComponent},
  {path:'summaryadmin',component:SummaryadminComponent}
  
 
  
];
@NgModule({
  
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export class AppModule{}
