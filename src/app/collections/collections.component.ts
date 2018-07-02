import { Component, OnInit } from '@angular/core';
import { AddingserviceService } from '../addingservice.service';
@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  public checkboxValue: boolean;
  t1: any;
  image: string;
  arr = this._addingservice.servicedata;
  temp=[];
  constructor(private _addingservice: AddingserviceService) { }
  ngOnInit() {
    console.log(this.arr);
  }
    test(y,z) {
      this.temp.push({
        "value": y,
        "prize": z
      }
    );
      this._addingservice.show = this.temp;      
    
  console.log('collections',this.temp);  
}}
