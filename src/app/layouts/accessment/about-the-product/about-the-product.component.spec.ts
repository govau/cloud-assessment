import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheProductComponent } from './about-the-product.component';

describe('AboutTheProductComponent', () => {
  let component: AboutTheProductComponent;
  let fixture: ComponentFixture<AboutTheProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTheProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTheProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
