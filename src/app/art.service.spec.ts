import { TestBed, inject } from '@angular/core/testing';

import { ArtService } from './art.service';

describe('ArtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtService]
    });
  });

  it('should be created', inject([ArtService], (service: ArtService) => {
    expect(service).toBeTruthy();
  }));
});
