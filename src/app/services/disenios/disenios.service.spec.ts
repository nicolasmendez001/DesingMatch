import { TestBed } from '@angular/core/testing';

import { DiseniosService } from './disenios.service';

describe('DiseniosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiseniosService = TestBed.get(DiseniosService);
    expect(service).toBeTruthy();
  });
});
