import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDisenioComponent } from './add-disenio.component';

describe('AddDisenioComponent', () => {
  let component: AddDisenioComponent;
  let fixture: ComponentFixture<AddDisenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDisenioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDisenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
