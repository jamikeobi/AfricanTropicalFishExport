import { TestBed } from '@angular/core/testing';

import { SpeciesListServicesService } from './species-list-services.service';

describe('SpeciesListServicesService', () => {
  let service: SpeciesListServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeciesListServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
