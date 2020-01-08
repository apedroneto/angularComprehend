import { TestBed } from '@angular/core/testing';

import { GoogleSpellingService } from './google-spelling.service';

describe('GoogleSpellingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleSpellingService = TestBed.get(GoogleSpellingService);
    expect(service).toBeTruthy();
  });
});
