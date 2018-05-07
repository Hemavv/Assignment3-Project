import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryuserComponent } from './summaryuser.component';

describe('SummaryuserComponent', () => {
  let component: SummaryuserComponent;
  let fixture: ComponentFixture<SummaryuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
