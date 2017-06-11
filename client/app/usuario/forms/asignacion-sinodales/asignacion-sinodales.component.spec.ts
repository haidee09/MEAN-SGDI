import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionSinodalesComponent } from './asignacion-sinodales.component';

describe('AsignacionSinodalesComponent', () => {
  let component: AsignacionSinodalesComponent;
  let fixture: ComponentFixture<AsignacionSinodalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionSinodalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionSinodalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
