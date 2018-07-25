import { TestBed, async, inject } from '@angular/core/testing';

import { ShowpassGuard } from './showpass.guard';

describe('ShowpassGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowpassGuard]
    });
  });

  it('should ...', inject([ShowpassGuard], (guard: ShowpassGuard) => {
    expect(guard).toBeTruthy();
  }));
});
