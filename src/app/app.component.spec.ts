//import from @angular
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from '@angular/router/testing'

//import components from application
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from "./components/site-header/site-header.component";
import { NaviComponent } from "./components/navi/navi.component";

//import services from application
import { WorkFlowService } from "./services/work-flow.service";
import { LocalStorageService } from "./services/local-storage.service";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SiteHeaderComponent,
        NaviComponent
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        WorkFlowService,
        LocalStorageService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Cloud Assessment Tool beta');
  }));
});

