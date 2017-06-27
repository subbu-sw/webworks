import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  categoryName = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.categoryName = decodeURIComponent(this.route.params['_value']['category']);
  }
  goBack(): void {
    this.router.navigateByUrl('/home')
  }
}
