import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { AddcartComponent } from './addcart/addcart.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddingserviceService } from './addingservice.service';
import { Imagemap2Component } from './imagemap2/imagemap2.component';
import { ShopComponent } from './shop/shop.component';

 import { Imagemap1Component } from './imagemap1/imagemap1.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SummaryuserComponent } from './summaryuser/summaryuser.component';
import { SummaryadminComponent } from './summaryadmin/summaryadmin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollectionsComponent,
    AddcartComponent,
    Imagemap1Component,
    Imagemap2Component,
    ShopComponent,
   
    LoginComponent,
    SignupComponent,
    SummaryuserComponent,
    SummaryadminComponent
   /*  FlexLayoutModule,
    MatToolbarModule */
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AddingserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
