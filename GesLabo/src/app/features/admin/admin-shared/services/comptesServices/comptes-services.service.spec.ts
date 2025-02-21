import { TestBed } from '@angular/core/testing';

import { ComptesServicesService } from './comptes-services.service';

describe('ComptesServicesService', () => {
  let service: ComptesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComptesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
