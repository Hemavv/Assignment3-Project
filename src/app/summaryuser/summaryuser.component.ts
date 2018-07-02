import { Component, OnInit } from '@angular/core';
import { AddingserviceService } from '../addingservice.service';
import { CollectionsComponent } from '../collections/collections.component';

@Component({
  selector: 'app-summaryuser',
  templateUrl: './summaryuser.component.html',
  styleUrls: ['./summaryuser.component.css']
})
export class SummaryuserComponent implements OnInit {

  add = {
    name: "Hema",
    Date: "25-04-2018",
    Delivery: "28-04-2018",
    Orderno: "8",
  };
  summary: any;
  view: any;
  total: any;
  constructor(private _addingservice: AddingserviceService) { }

  ngOnInit() {
    this.summary = this._addingservice.show;
    this.view = this._addingservice.servicedata;
    this.total=this._addingservice.sumofprod();
    console.log(this.total)
  }

}
