import { TestBed, inject } from '@angular/core/testing';

import { DocumentosService } from './documentos.service';

describe('DocumentosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentosService]
    });
  });

  it('should be created', inject([DocumentosService], (service: DocumentosService) => {
    expect(service).toBeTruthy();
  }));
});
