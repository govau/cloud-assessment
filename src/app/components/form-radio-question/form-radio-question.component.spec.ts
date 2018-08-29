import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRadioQuestionComponent } from './form-radio-question.component';

describe('FormRadioQuestionComponent', () => {
  let component: FormRadioQuestionComponent;
  let fixture: ComponentFixture<FormRadioQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRadioQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRadioQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
