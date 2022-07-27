import { TestBed } from '@angular/core/testing';

import { AuthnewService } from './authnew.service';

describe('AuthnewService', () => {
  let service: AuthnewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthnewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
