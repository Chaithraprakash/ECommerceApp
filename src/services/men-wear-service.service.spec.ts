import { TestBed, inject } from '@angular/core/testing';

import { MenWearService } from './men-wear-service.service';
import { HttpClientModule } from '@angular/common/http';
describe('MenWearServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MenWearService]
    });
  });

  it('should be created', inject([MenWearService], (service: MenWearService) => {
    expect(service).toBeTruthy();
  }));
});
