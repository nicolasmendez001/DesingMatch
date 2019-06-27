import { TestBed } from '@angular/core/testing';

import { RegisterEmpresaService } from './register-empresa.service';

describe('RegisterEmpresaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterEmpresaService = TestBed.get(RegisterEmpresaService);
    expect(service).toBeTruthy();
  });
});
