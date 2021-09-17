import { TestBed } from '@angular/core/testing';

import { EthswapService } from './ethswap.service';

describe('EthswapService', () => {
  let service: EthswapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EthswapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
