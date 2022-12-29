import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPaginateComponent } from './product-detail.component';

describe('ProductPaginateComponent', () => {
  let component: ProductPaginateComponent;
  let fixture: ComponentFixture<ProductPaginateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPaginateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('next() should iterate forwards and in circle', () => {
    expect(component.index).toBe(0);
    component.next();
    expect(component.index).toBe(1);
    component.next();
    expect(component.index).toBe(2);
    component.next();
    expect(component.index).toBe(0);
  });

  it('previous should iterate backwards and in circle', () => {
    expect(component.index).toBe(0);
    component.previous();
    expect(component.index).toBe(1);
    component.previous();
    expect(component.index).toBe(2);
    component.previous();
    expect(component.index).toBe(0);
  });
});
