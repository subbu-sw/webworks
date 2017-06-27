import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { GenderFacetsComponent } from './gender-facets/gender-facets.component';
import { CategoryFacetsComponent } from './category-facets/category-facets.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule }     from './app-routing.module';
import { CategoryPageComponent } from './category-page/category-page.component';
import { UrlEncodePipe } from './pipes/url-encode.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GenderFacetsComponent,
    CategoryFacetsComponent,
    ProductGridComponent,
    HomeComponent,
    CategoryPageComponent,
    UrlEncodePipe
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);
