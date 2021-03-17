import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigatorPersonalInterestsComponent } from './investigator-personal-interests.component';

describe('InvestigatorPersonalInterestsComponent', () => {
  let component: InvestigatorPersonalInterestsComponent;
  let fixture: ComponentFixture<InvestigatorPersonalInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigatorPersonalInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigatorPersonalInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
