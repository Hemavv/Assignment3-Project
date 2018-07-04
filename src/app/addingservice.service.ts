import { Injectable } from '@angular/core';

@Injectable()
export class AddingserviceService {
  
  servicedata: any = [

    {image: 'assets/d.jpg',class:"d1", value: 'Dancing Doll', prize: 5308,th1:'ARTIST',td1:'Tyeb Mehta',th2:'MEDIUM',td2:'Painting',th3:'MATERIALS USED',td3:'Oil,arcylic and transfer on linen',th4:'DIMENSIONS(IN)',td4:'24*18',th5:'ESTIMATED DELIVERY TIME',td5:'1-2 Weeks' },
    { image: 'assets/k1.jpg',class:"d2", value: 'Angles', prize: 7000,th1:'ARTIST',td1:'Amrith Shergil',th2:'MEDIUM',td2:'Painting',th3:'MATERIALS USED',td3:'Acrylic on canvas',th4:'DIMENSIONS(IN)',td4:'44 7/8*63 3/4',th5:'ESTIMATED DELIVERY TIME',td5:'1-2 Weeks' },
    { image: 'assets/glass.jpg',class:"d3", value: 'Encaustic', prize: 7000,th1:'ARTIST',td1:'B.C.Sangal',th2:'MEDIUM',td2:'Painting',th3:'MATERIALS USED',td3:'Acrylic on wood',th4:'DIMENSIONS(IN)',td4:'23 2/3',th5:'ESTIMATED DELIVERY TIME',td5:'1-2 Weeks' },
    { image: 'assets/nat.jpg',class:"d4", value: 'Nataraj', prize: 10000,th1:'ARTIST',td1:'Satish Gujral',th2:'MEDIUM',td2:'Painting',th3:'MATERIALS USED',td3:'Oil painting trasfer on linen',th4:'DIMENSIONS(IN)',td4:'56*29',th5:'ESTIMATED DELIVERY TIME',td5:'1-2 Weeks' },
    { image: 'assets/k.jpg',class:"d5",value: 'Krishna', prize: 20000,th1:'ARTIST',td1:'Amrita Shergil',th2:'MEDIUM',td2:'Painting',th3:'MATERIALS USED',td3:'Oil,arcylic and transfer on linen',th4:'DIMENSIONS(IN)',td4:'24*18',th5:'ESTIMATED DELIVERY TIME',td5:'1-2 Weeks'},
    { image: 'assets/e.jpg',class:"d1", value: 'Acrylic', prize: 9000 ,th1:'ARTIST',td1:'Francis Newton Souza',th2:'MEDIUM',td2:'Painting',th3:'MATERIALS USED',td3:'Oil,arcylic and transfer on linen',th4:'DIMENSIONS(IN)',td4:'47*35',th5:'ESTIMATED DELIVERY TIME',td5:'1-2 Weeks'},
    { image: 'assets/sh1.jpg',class:"d2",value: 'Antique', prize: 4615,th1:'ARTIST',td1:'Satish Gujral',th2:'MEDIUM',td2:'Painting',th3:'MATERIALS USED',td3:'Oil,arcylic and transfer on linen',th4:'DIMENSIONS(IN)',td4:'24*18',th5:'ESTIMATED DELIVERY TIME',td5:'1-2 Weeks' },
    { image: 'assets/sh2.jpg',class:"d3",value: 'Vintage', prize: 7000,th1:'ARTIST',td1:'Tyeb Mehta',th2:'MEDIUM',td2:'Painting',th3:'MATERIALS USED',td3:'Arcylic and transfer on linen',th4:'DIMENSIONS(IN)',td4:'44*63',th5:'ESTIMATED DELIVERY TIME',td5:'1-2 Weeks' }
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
 
}



