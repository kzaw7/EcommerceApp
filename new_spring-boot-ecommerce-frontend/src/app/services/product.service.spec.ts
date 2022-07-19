import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product.ServiceComponent } from './product.service.component';

describe('Product.ServiceComponent', () => {
  let component: Product.ServiceComponent;
  let fixture: ComponentFixture<Product.ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product.ServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product.ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
