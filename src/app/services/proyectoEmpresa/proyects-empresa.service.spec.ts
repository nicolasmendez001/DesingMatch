import { TestBed } from '@angular/core/testing';

import { ProyectsEmpresaService } from './proyects-empresa.service';

describe('ProyectsEmpresaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProyectsEmpresaService = TestBed.get(ProyectsEmpresaService);
    expect(service).toBeTruthy();
  });
});
