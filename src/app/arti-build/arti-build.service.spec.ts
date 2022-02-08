import { TestBed } from '@angular/core/testing';

import { ArtiBuildService } from './arti-build.service';

describe('ArtiBuildService', () => {
  let service: ArtiBuildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtiBuildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
