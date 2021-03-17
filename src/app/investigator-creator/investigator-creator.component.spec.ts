import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigatorCreatorComponent } from './investigator-creator.component';

describe('InvestigatorCreatorComponent', () => {
  let component: InvestigatorCreatorComponent;
  let fixture: ComponentFixture<InvestigatorCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigatorCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigatorCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
