import { TestBed, inject } from '@angular/core/testing';

import { ImagenService } from './image.service';

describe('ImagenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagenService]
    });
  });

  it('should be created', inject([ImagenService], (service: ImagenService) => {
    expect(service).toBeTruthy();
  }));
});
