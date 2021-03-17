import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigatorOccupationComponent } from './investigator-occupation.component';

describe('InvestigatorOccupationComponent', () => {
  let component: InvestigatorOccupationComponent;
  let fixture: ComponentFixture<InvestigatorOccupationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigatorOccupationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigatorOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
