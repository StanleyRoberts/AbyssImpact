import { TestBed } from '@angular/core/testing';

import { CharacterCardService } from './character-card.service';

describe('CharacterCardService', () => {
  let service: CharacterCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
