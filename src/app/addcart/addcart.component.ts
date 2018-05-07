import { Component, OnInit,ViewChild } from '@angular/core';
@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
add={
  name:"Hema",
  Date:"25-04-2018",
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

alertMe(val){alert(val);

}

  ngOnInit() {
  }

}
