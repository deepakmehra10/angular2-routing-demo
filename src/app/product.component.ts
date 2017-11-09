import {Component} from '@angular/core';

@Component ({
  selector: 'app-root',
  template: `<h1>Products</h1>
  <ul>
    <li>
      <a [routerLink]="['/product',products[0].productNumber]">{{ products[0]?.productName }}</a>
    </li>
    
    <li>
      <a [routerLink]="['/product',products[1].productNumber]"> {{ products[1]?.productName }}</a>
    </li>
    
    <li> 
      <a [routerLink]="['/product',products[2].productNumber]"> {{ products[2]?.productName }} </a>
    </li>
    
    <li>
      <a [routerLink]="['/product',products[3].productNumber]"> {{ products[3]?.productName }} </a>
    </li>
  </ul>
  <a [routerLink]="['/product']" [queryParams]="{ page: 99 }">Go to Page 99</a>
  `
})

export class ProductComponent {

    products = [
    {
      productNumber: 1,
      productName: 'Watch',
      productDescription: 'Wrist Watch'
    },
    {
      productNumber: 2,
      productName: 'Watch',
      productDescription: 'Wrist Watch'
    },
    {
      productNumber: 3,
      productName: 'Watch',
      productDescription: 'Wrist Watch'
    },
    {
      productNumber: 4,
      productName: 'Watch',
      productDescription: 'Wrist Watch'
    }
  ];
}
