import { TestBed } from '@angular/core/testing';

import { Web3ConfigService } from './web3Config.service';

describe('Web3Service', () => {
  let service: Web3ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Web3ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
