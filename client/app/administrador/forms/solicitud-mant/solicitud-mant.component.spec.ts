import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudMantComponent } from './solicitud-mant.component';

describe('SolicitudMantComponent', () => {
  let component: SolicitudMantComponent;
  let fixture: ComponentFixture<SolicitudMantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudMantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudMantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
