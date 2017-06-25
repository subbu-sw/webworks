import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { GenderFacetsComponent } from './gender-facets/gender-facets.component';
import { CategoryFacetsComponent } from './category-facets/category-facets.component';
import { ProductGridComponent } from './product-grid/product-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    GenderFacetsComponent,
    CategoryFacetsComponent,
    ProductGridComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);
