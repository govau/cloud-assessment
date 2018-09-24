import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAccordionItemComponent } from './report-accordion-item.component';

describe('ReportAccordionItemComponent', () => {
  let component: ReportAccordionItemComponent;
  let fixture: ComponentFixture<ReportAccordionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAccordionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
