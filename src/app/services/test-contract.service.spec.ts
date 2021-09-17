import { TestBed } from '@angular/core/testing';

import { TestContractService } from './test-contract.service';

describe('TestContractService', () => {
  let service: TestContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
