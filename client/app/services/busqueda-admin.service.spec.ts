import { TestBed, inject } from '@angular/core/testing';

import { BusquedaAdminService } from './busqueda-admin.service';

describe('BusquedaAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusquedaAdminService]
    });
  });

  it('should be created', inject([BusquedaAdminService], (service: BusquedaAdminService) => {
    expect(service).toBeTruthy();
  }));
});
