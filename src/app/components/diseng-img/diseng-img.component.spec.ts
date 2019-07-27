import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisengImgComponent } from './diseng-img.component';

describe('DisengImgComponent', () => {
  let component: DisengImgComponent;
  let fixture: ComponentFixture<DisengImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisengImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisengImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
