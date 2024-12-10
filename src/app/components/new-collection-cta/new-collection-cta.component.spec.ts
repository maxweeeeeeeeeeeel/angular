import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCollectionCtaComponent } from './new-collection-cta.component';

describe('NewCollectionCtaComponent', () => {
  let component: NewCollectionCtaComponent;
  let fixture: ComponentFixture<NewCollectionCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCollectionCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCollectionCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
