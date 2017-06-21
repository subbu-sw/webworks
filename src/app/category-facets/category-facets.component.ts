import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';


@Component({
  selector: 'app-category-facets',
  templateUrl: './category-facets.component.html',
  styleUrls: ['./category-facets.component.scss'],
  providers: [ProductService]
})
export class CategoryFacetsComponent implements OnInit {
  categoryFacets: any[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getCategoryFacets();
  }

  getCategoryFacets(): void {
    this.productService.getCategoryFacets().then(result => this.categoryFacets = result);
  }

}
