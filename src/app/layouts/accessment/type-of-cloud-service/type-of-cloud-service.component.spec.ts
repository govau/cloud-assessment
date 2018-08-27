import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfCloudServiceComponent } from './type-of-cloud-service.component';

describe('TypeOfCloudServiceComponent', () => {
  let component: TypeOfCloudServiceComponent;
  let fixture: ComponentFixture<TypeOfCloudServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfCloudServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfCloudServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
