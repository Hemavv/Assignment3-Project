import { Component, OnInit, ViewChild } from '@angular/core';
import { CollectionsComponent } from '../collections/collections.component';
import { AddingserviceService } from '../addingservice.service';
import { summaryFileName } from '@angular/compiler/src/aot/util';
@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  addcart : any;
  total:any;
  //  sum = 0;
  constructor(private _addingservice: AddingserviceService) {
  }
      ngOnInit() {
       this.addcart = this._addingservice.show;
      console.log('check',this.addcart);
      // this.sumOfProducts();
    this.total=this._addingservice.sumOfProducts();
      console.log(this.total);
    }
    add = {
      name: "Hema",
      Date: "25-04-2018"
    };
    alertMe(val) {
      alert(val);

    }
    // sumOfProducts(){
    //   let i;
    //   for(i=0;i<(this.addcart).length;i++){
    //      this.sum = this.sum + this.addcart[i]['prize'];
    //   }
    //   return this.sum;
    // }
  }

