import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigatorIdeologyComponent } from './investigator-ideology.component';

describe('InvestigatorIdeologyComponent', () => {
  let component: InvestigatorIdeologyComponent;
  let fixture: ComponentFixture<InvestigatorIdeologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigatorIdeologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigatorIdeologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
