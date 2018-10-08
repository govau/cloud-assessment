import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralQuestionComponent } from './general-question.component';

describe('GeneralQuestionComponent', () => {
  let component: GeneralQuestionComponent;
  let fixture: ComponentFixture<GeneralQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
