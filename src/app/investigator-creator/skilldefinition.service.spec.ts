import { TestBed } from '@angular/core/testing';

import { SkilldefinitionService } from './skilldefinition.service';

describe('SkilldefinitionService', () => {
  let service: SkilldefinitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkilldefinitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
