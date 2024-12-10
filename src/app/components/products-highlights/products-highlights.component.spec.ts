import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsHighlightsComponent } from './products-highlights.component';

describe('ProductsHighlightsComponent', () => {
  let component: ProductsHighlightsComponent;
  let fixture: ComponentFixture<ProductsHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsHighlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
