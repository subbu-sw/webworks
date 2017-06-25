import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProductService {
  private productsUrl = 'http://api.shortlyst.com/v1/products?lowPriceFilter=0&highPriceFilter=0&discountFilter=0&trueDealFilter=false&mode=lite&apikey=4df6e9866e704496c48abfdf772f6c6e';
  
  constructor(private http: Http) { }

  extractGenderFacets(response): any[] {
    let body = response.json()
    // console.log('service call response='+JSON.stringify(body["facets"]))
    let categories_facets = []
    for (let facet of body["facets"]) {
        if (facet.name == "gender") {
            console.log("facet.name="+facet.name)
            let silhouette_values = facet.value;
            for (let silhouette_value in silhouette_values) {
                categories_facets.push({"name":silhouette_value})
            }
        }
    }
    return categories_facets;
  } 

  getGenderFacets(): Promise<any[]> {
    return this.http.get(this.productsUrl)
              .toPromise()
              .then(response => this.extractGenderFacets(response))
              .catch(this.handleError);
  }

extractCategoryFacets(response): any[] {
    let body = response.json()
    // console.log('service call response='+JSON.stringify(body["facets"]))
    let categories_facets = []
    for (let facet of body["facets"]) {
        if (facet.name == "silhouette") {
            console.log("facet.name="+facet.name)
            let silhouette_values = facet.value;
            for (let silhouette_value in silhouette_values) {
                categories_facets.push({"name":silhouette_value})
            }
        }
    }
//    console.log('service call response='+JSON.stringify(response))
    return categories_facets;

  } 

  getCategoryFacets(): Promise<any[]> {
    return this.http.get(this.productsUrl)
              .toPromise()
              .then(response => this.extractCategoryFacets(response))
              .catch(this.handleError);
  }

extractProducts(response): any[] {
  let body = response.json()
  let products = []
  // console.log('getProducts return='+JSON.stringify(body["productList"]))
  return body["productList"];
} 

  getProducts(start,limit): Promise<any[]> {
    return this.http.get(this.productsUrl+'&index='+start+'&limit='+limit)
              .toPromise()
              .then(response => this.extractProducts(response))
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
