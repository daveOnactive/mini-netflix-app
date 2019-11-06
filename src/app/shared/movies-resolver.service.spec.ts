import { TestBed } from '@angular/core/testing';

import { MoviesResolverService } from './movies-resolver.service';

describe('MoviesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesResolverService = TestBed.get(MoviesResolverService);
    expect(service).toBeTruthy();
  });
});
