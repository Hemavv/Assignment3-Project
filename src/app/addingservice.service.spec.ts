import { TestBed, inject } from '@angular/core/testing';

import { AddingserviceService } from './addingservice.service';

describe('AddingserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddingserviceService]
    });
  });

  it('should be created', inject([AddingserviceService], (service: AddingserviceService) => {
    expect(service).toBeTruthy();
  }));
});
