import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryadminComponent } from './summaryadmin.component';

describe('SummaryadminComponent', () => {
  let component: SummaryadminComponent;
  let fixture: ComponentFixture<SummaryadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
