import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosEmpresaComponent } from './proyectos-empresa.component';

describe('ProyectosEmpresaComponent', () => {
  let component: ProyectosEmpresaComponent;
  let fixture: ComponentFixture<ProyectosEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectosEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
