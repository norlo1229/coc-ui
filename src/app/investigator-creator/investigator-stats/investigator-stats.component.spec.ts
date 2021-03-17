import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigatorStatsComponent } from './investigator-stats.component';

describe('InvestigatorStatsComponent', () => {
  let component: InvestigatorStatsComponent;
  let fixture: ComponentFixture<InvestigatorStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigatorStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigatorStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
