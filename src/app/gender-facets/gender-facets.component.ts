import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';


@Component({
  selector: 'app-gender-facets',
  templateUrl: './gender-facets.component.html',
  styleUrls: ['./gender-facets.component.scss'],
  providers: [ProductService]
})
export class GenderFacetsComponent implements OnInit {
  genderFacets : any[];
    
  constructor(private productService: ProductService) { }

  getGenderFacets(): void {
    this.productService.getGenderFacets().then(result => this.genderFacets = result);
  }

  ngOnInit(): void {
    this.getGenderFacets();
  }
  
}
