import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudAssesmentReportComponent } from './cloud-assesment-report.component';

describe('CloudAssesmentReportComponent', () => {
  let component: CloudAssesmentReportComponent;
  let fixture: ComponentFixture<CloudAssesmentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudAssesmentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudAssesmentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
