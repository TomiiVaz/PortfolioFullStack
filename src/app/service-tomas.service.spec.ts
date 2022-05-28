import { TestBed } from '@angular/core/testing';

import { ServiceTomasService } from './service-tomas.service';

describe('ServiceTomasService', () => {
  let service: ServiceTomasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTomasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
