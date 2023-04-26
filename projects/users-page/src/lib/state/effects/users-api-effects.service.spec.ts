import { TestBed } from '@angular/core/testing';

import { UsersApiEffectsService } from './users-api-effects.service';

describe('UsersApiEffectsService', () => {
  let service: UsersApiEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersApiEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
