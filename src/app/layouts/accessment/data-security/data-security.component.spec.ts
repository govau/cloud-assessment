import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSecurityComponent } from './data-security.component';

describe('DataSecurityComponent', () => {
  let component: DataSecurityComponent;
  let fixture: ComponentFixture<DataSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
