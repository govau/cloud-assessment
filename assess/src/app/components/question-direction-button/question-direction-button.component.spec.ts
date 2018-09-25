import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDirectionButtonComponent } from './question-direction-button.component';

describe('QuestionDirectionButtonComponent', () => {
  let component: QuestionDirectionButtonComponent;
  let fixture: ComponentFixture<QuestionDirectionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionDirectionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDirectionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
