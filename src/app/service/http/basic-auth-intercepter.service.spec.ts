import { TestBed } from '@angular/core/testing';

import { BasicAuthIntercepterService } from './basic-auth-intercepter.service';

describe('BasicAuthIntercepterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthIntercepterService = TestBed.get(BasicAuthIntercepterService);
    expect(service).toBeTruthy();
  });
});
