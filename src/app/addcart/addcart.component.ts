import { Component, OnInit, ViewChild } from '@angular/core';
import { CollectionsComponent } from '../collections/collections.component';
import { AddingserviceService } from '../addingservice.service';
@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  addcart : any;
  total:any;
  constructor(private _addingservice: AddingserviceService) {
  }
      ngOnInit() {
       this.addcart = this._addingservice.show;
     this.total=this._addingservice.sumOfProducts();
    }
    add = {
      name: "Hema",
      Date: "25-04-2018"
    };
    alertMe(val) {
      alert(val);

    }
  
  }

