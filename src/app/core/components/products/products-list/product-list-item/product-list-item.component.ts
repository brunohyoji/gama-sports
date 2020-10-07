import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product;
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

  getInstallmentsValue(product: Product): number {
    return product.price / product.installments;
  }

}
