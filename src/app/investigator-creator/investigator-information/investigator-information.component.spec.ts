import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestigatorInformationComponent } from './investigator-information.component';

describe('InvestigatorInformationComponent', () => {
  let component: InvestigatorInformationComponent;
  let fixture: ComponentFixture<InvestigatorInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigatorInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigatorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
