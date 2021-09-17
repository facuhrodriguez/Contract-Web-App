import { TestBed } from '@angular/core/testing';

import { LoadsmartcontractService } from './loadsmartcontract.service';

describe('LoadsmartcontractService', () => {
  let service: LoadsmartcontractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadsmartcontractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
