import { TestBed, inject } from '@angular/core/testing';

import { CartDataService } from './cart-data.service';

describe('CartDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartDataService]
    });
  });

  it('should ...', inject([CartDataService], (service: CartDataService) => {
    expect(service).toBeTruthy();
  }));
});
