import { TestBed } from '@angular/core/testing';

import { SemanticSearchService } from './semantic-search.service';

describe('SemanticSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SemanticSearchService = TestBed.get(SemanticSearchService);
    expect(service).toBeTruthy();
  });
});
