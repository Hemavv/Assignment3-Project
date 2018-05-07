import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shop8Component } from './shop8.component';

describe('Shop8Component', () => {
  let component: Shop8Component;
  let fixture: ComponentFixture<Shop8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shop8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shop8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
