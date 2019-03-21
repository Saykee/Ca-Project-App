import { TestBed } from '@angular/core/testing';

import { HibpApiService } from './hibp-api.service';

describe('HibpApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HibpApiService = TestBed.get(HibpApiService);
    expect(service).toBeTruthy();
  });
});
