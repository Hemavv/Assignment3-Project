import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagemap2Component } from './imagemap2.component';

describe('Imagemap2Component', () => {
  let component: Imagemap2Component;
  let fixture: ComponentFixture<Imagemap2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imagemap2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagemap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
