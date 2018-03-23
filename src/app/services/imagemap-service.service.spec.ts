import { TestBed, inject } from '@angular/core/testing';

import { ImagemapServiceService } from './imagemap-service.service';

describe('ImagemapServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagemapServiceService]
    });
  });

  it('should be created', inject([ImagemapServiceService], (service: ImagemapServiceService) => {
    expect(service).toBeTruthy();
  }));
});
