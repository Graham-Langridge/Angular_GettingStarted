import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
// Component created with the following command...
// ng g c products/product-detail --flat

@Component({
  // we will display this as part of the routing selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
