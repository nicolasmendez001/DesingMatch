import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProyectoEmpresaComponent } from './new-proyecto-empresa.component';

describe('NewProyectoEmpresaComponent', () => {
  let component: NewProyectoEmpresaComponent;
  let fixture: ComponentFixture<NewProyectoEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProyectoEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProyectoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
