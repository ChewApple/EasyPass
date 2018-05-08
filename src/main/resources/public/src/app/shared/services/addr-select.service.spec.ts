import { TestBed, inject } from '@angular/core/testing';

import { AddrSelectService } from './addr-select.service';

describe('AddrSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddrSelectService]
    });
  });

  it('should be created', inject([AddrSelectService], (service: AddrSelectService) => {
    expect(service).toBeTruthy();
  }));
});
