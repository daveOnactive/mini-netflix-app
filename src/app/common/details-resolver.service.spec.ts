import { TestBed } from '@angular/core/testing';

import { DetailsResolverService } from './details-resolver.service';

describe('DetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailsResolverService = TestBed.get(DetailsResolverService);
    expect(service).toBeTruthy();
  });
});
