import { Component, OnInit, Input } from '@angular/core';

import { ProductService } from '../services/product-service';
declare var componentHandler: any;

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
  providers: [ProductService]
})
// declare var componentHandler: any;
export class ProductGridComponent implements OnInit {
  @Input() categoryName: string;

  products: any[];
  start = 0;
  limit = 15;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
    console.log('ngOnInit inside productgrid!!')
    console.log('categoryName='+ this.categoryName)
  }

  getProducts(): void {
    this.productService.getProducts(this.start,this.limit, this.categoryName).then(result => this.products = result)
  }
  onScrollDown() {
	    console.log('scrolled!!')
      this.start += this.limit;
      this.productService.getProducts(this.start,this.limit, this.categoryName).then(result => this.products.push.apply(this.products,result))
	}
  ngAfterViewInit(){
        componentHandler.upgradeAllRegistered();
    }
  loadMore(event){
      console.log(event);
      this.onScrollDown()
    }
}
