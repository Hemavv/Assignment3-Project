import { Component, OnInit,Output } from '@angular/core';
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
  temp1=[];
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
}
data(a,b,c,d,e,f,g,h,i,j,k,l){
  this.temp1.push({
    "image":a,
    "class":b,
    "th1":c,
    "td1":d,
    "th2":e,
    "td2":f,
    "th3":g,
    "td3":h,
    "th4":i,
    "td4":j,
    "th5":k,
    "td5":l

  });
  this._addingservice.show=this.temp1;
  console.log(this._addingservice.show)
}

}
