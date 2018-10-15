//import from @angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";

//import components from application
import { ReportAccordionItemComponent } from './report-accordion-item.component';

describe('ReportAccordionItemComponent', () => {
  let component: ReportAccordionItemComponent;
  let fixture: ComponentFixture<ReportAccordionItemComponent>;
  let el: HTMLElement;

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

  it('should panel expanded to true when the panel is clicked', async(() => {
    component.panelClicked();
    expect(component.panelExpanded).toBeTruthy();
  }));

  it('should call the PanelClicked method once when the panel is clicked', async(() => {
    fixture.detectChanges();
    spyOn(component, 'panelClicked');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.panelClicked).toHaveBeenCalledTimes(1);
  }));
});
