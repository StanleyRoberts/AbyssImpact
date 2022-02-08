import { TestBed } from '@angular/core/testing';

import { AbyssteamsService } from './abyssteams.service';

describe('AbyssteamsService', () => {
  let service: AbyssteamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbyssteamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
