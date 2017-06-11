import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadComplementariaComponent } from './actividad-complementaria.component';

describe('ActividadComplementariaComponent', () => {
  let component: ActividadComplementariaComponent;
  let fixture: ComponentFixture<ActividadComplementariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadComplementariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadComplementariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
