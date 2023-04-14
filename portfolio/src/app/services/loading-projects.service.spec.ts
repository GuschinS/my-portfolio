import { TestBed } from '@angular/core/testing';

import { LoadingProjectsService } from './loading-projects.service';

describe('LoadingProjectsService', () => {
  let service: LoadingProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
