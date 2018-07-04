import { Component, OnInit } from '@angular/core';
import { AddingserviceService } from '../addingservice.service';
import { CollectionsComponent } from '../collections/collections.component';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
adddata:any;

  constructor(private _addingservice: AddingserviceService){}
  
  ngOnInit() {
    
    this.adddata=this._addingservice.show;
  }

}
