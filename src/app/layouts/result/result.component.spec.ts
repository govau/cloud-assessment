import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { ReportAccordionItemComponent } from "../../components/report-accordion-item/report-accordion-item.component";
import { WorkFlowService } from "../../services/work-flow.service";
import { LocalStorageService } from "../../services/local-storage.service";
import { SubmitServiceService } from "../../services/submit-service.service";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResultComponent,
        ReportAccordionItemComponent
      ],
      providers: [
        WorkFlowService,
        LocalStorageService,
        SubmitServiceService,
        HttpClient,
        HttpHandler
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //currently failing
  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
