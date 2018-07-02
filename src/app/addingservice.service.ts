import { Injectable } from '@angular/core';

@Injectable()
export class AddingserviceService {
  
  servicedata: any = [

    {image: 'assets/d.jpg', router: '/shop1', value: 'Dancing Doll', prize: 5308 },
    { image: 'assets/k1.jpg', router: '/shop2', value: 'Angles', prize: 7000 },
    { image: 'assets/glass.jpg', router: '/shop3', value: 'Encaustic', prize: 7000 },
    { image: 'assets/nat.jpg', router: '/shop4', value: 'Nataraj', prize: 10000 },
    { image: 'assets/k.jpg', router: '/shop5',value: 'Krishna', prize: 20000 },
    { image: 'assets/e.jpg', router: '/shop6', value: 'Acrylic', prize: 9000 },
    { image: 'assets/sh1.jpg', router: '/shop7',value: 'Antique', prize: 4615 },
    { image: 'assets/sh2.jpg', router: '/shop8',value: 'Vintage', prize: 7000 }
  ]
  show: any;
  sum=0;
  sumOfProducts(){
    let i;
    for(i=0;i<(this.show).length;i++){
       this.sum = this.sum + this.show[i]['prize'];
    }
    return this.sum;
  }
  sumofprod(){
    let i;
    for(i=0;i>(this.show).length;i++){
       this.sum = this.sum+ this.show[i]['prize'];
    }
    return this.sum;
  }
  shopdata:any=[
    {image:'assets/d.jpg',th1:'ARTIST',td1:'Tyeb Mehta'}
  ]
}



