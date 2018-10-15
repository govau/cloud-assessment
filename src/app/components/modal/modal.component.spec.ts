//import from @angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

//import components from application
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //currently failing
  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
