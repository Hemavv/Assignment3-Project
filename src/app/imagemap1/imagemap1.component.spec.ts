import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagemap1Component } from './imagemap1.component';

describe('Imagemap1Component', () => {
  let component: Imagemap1Component;
  let fixture: ComponentFixture<Imagemap1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imagemap1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagemap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
