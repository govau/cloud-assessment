//import from @angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

//import components from application
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

  it('should emit on click event for next button', () => {
    spyOn(component.goNextButtonClick, 'emit');
    component.goNext();
    expect(component.goNextButtonClick.emit).toHaveBeenCalled();
  });

  it('should emit on click event for previous button', () => {
    spyOn(component.goPreviousButtonClick, 'emit');
    component.goPrevious();
    expect(component.goPreviousButtonClick.emit).toHaveBeenCalled();
  });
});
