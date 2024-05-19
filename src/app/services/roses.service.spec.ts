import { TestBed } from '@angular/core/testing';

import { RosesService } from './roses.service';

describe('RosesService', () => {
  let service: RosesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
