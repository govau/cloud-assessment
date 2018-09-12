import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToPrepareComponent } from './how-to-prepare.component';

describe('HowToPrepareComponent', () => {
  let component: HowToPrepareComponent;
  let fixture: ComponentFixture<HowToPrepareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToPrepareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToPrepareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
