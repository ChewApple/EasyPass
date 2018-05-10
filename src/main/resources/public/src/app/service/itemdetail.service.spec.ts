import { TestBed, inject } from '@angular/core/testing';

import { ItemdetailService } from './itemdetail.service';

describe('ItemdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemdetailService]
    });
  });

  it('should be created', inject([ItemdetailService], (service: ItemdetailService) => {
    expect(service).toBeTruthy();
  }));
});
