import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
  providers: [ProductService]
})
export class ProductGridComponent implements OnInit {
  products: any[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().then(result => this.products = result)
  }
  onScroll () {
	    console.log('scrolled!!')
	}
}
