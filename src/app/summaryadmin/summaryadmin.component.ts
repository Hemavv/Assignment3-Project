import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summaryadmin',
  templateUrl: './summaryadmin.component.html',
  styleUrls: ['./summaryadmin.component.css']
})
export class SummaryadminComponent implements OnInit {
  add={
    name:"Hema",
    Date:"25-04-2018",
    Delivery:"28-04-2018",
    Orderno:"8",
    Image1:"Image1",
    Image2:"Image2",
    Image3:"Image3",
    Image4:"Image4",
    Image5:"Image5",
    Image6:"Image6",
    Image7:"Image7",
    Image8:"Image8",
    Rupee1:"5000",
    Rupee2:"7000",
    Rupee3:"7000",
    Rupee4:"10000",
    Rupee5:"20000",
    Rupee6:"9000",
    Rupee7:"4000",
    Rupee8:"7000",
    Total_Price:"69000"
  };
  add1={
    name:"Satya",
    Date:"25-04-2018",
    Delivery:"29-04-2018",
    Orderno:"5",
    Image1:"Image1",
    Image2:"Image2",
    Image3:"Image3",
    Image4:"Image4",
    Image5:"Image5",
    
    Rupee1:"5000",
    Rupee2:"7000",
    Rupee3:"7000",
    Rupee4:"10000",
    Rupee5:"20000",
    
    Total_Price:"49000"
  };
  add2={
    name:"Sadiya"
  }
  add3={
    name:"Sagar"
  }
  constructor() { }

  ngOnInit() {
  }

}
