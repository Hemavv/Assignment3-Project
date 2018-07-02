import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material'; */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { AddcartComponent } from './addcart/addcart.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddingserviceService } from './addingservice.service';
import { Imagemap2Component } from './imagemap2/imagemap2.component';
import { Shop1Component } from './shop1/shop1.component';
import { Shop2Component } from './shop2/shop2.component';
import { Shop3Component } from './shop3/shop3.component';
import { Shop4Component } from './shop4/shop4.component';
import { Shop5Component } from './shop5/shop5.component';
import { Shop6Component } from './shop6/shop6.component';
import { Shop7Component } from './shop7/shop7.component';
import { Shop8Component } from './shop8/shop8.component';
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
    Shop1Component,
    Shop2Component,
    Shop3Component,
    Shop4Component,
    Shop5Component,
    Shop6Component,
    Shop7Component,
    Shop8Component,
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
