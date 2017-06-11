import { TestBed, inject } from '@angular/core/testing';

import { GuardarDocumentoService } from './guardar-documento.service';

describe('GuardarDocumentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardarDocumentoService]
    });
  });

  it('should be created', inject([GuardarDocumentoService], (service: GuardarDocumentoService) => {
    expect(service).toBeTruthy();
  }));
});
