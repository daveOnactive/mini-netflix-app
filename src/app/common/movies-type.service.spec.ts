import { TestBed } from '@angular/core/testing';

import { MoviesTypeService } from './movies-type.service';

describe('MoviesTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesTypeService = TestBed.get(MoviesTypeService);
    expect(service).toBeTruthy();
  });
});
