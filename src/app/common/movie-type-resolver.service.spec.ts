import { TestBed } from '@angular/core/testing';

import { MovieTypeResolverService } from './movie-type-resolver.service';

describe('MovieTypeResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieTypeResolverService = TestBed.get(MovieTypeResolverService);
    expect(service).toBeTruthy();
  });
});
