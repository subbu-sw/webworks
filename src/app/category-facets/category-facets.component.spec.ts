import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFacetsComponent } from './category-facets.component';

describe('CategoryFacetsComponent', () => {
  let component: CategoryFacetsComponent;
  let fixture: ComponentFixture<CategoryFacetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryFacetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFacetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
