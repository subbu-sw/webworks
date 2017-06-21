import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderFacetsComponent } from './gender-facets.component';

describe('GenderFacetsComponent', () => {
  let component: GenderFacetsComponent;
  let fixture: ComponentFixture<GenderFacetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderFacetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderFacetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
