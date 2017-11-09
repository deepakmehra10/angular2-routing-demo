import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({

  template: `<h1>Product with product</h1>
  <div style="padding: 10px;background-color: dodgerblue;color: black">
    {{pageTitle}}
  </div>
  <h1>Deepak</h1>
  <nav>
    <a [routerLink]="['overview']">Overview</a>
    <a [routerLink]="['specs']">Technical Specs</a>
  </nav>
    <router-outlet></router-outlet>
  <!-- Overview & Specs components get added here by the router -->
  `
})

export class ProductDetailComponent implements OnInit {

  // constructor() {}
  title = 'Tour of Heroes';
  // var hello = 'hello!';
  pageTitle: string = 'ProductDetail';
  constructor(private _route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let id = +this._route.snapshot.params['id'];
    this.pageTitle += `:${id}`;
  }
}
