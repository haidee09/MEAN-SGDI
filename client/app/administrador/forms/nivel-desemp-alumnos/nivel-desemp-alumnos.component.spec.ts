import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelDesempAlumnosComponent } from './nivel-desemp-alumnos.component';

describe('NivelDesempAlumnosComponent', () => {
  let component: NivelDesempAlumnosComponent;
  let fixture: ComponentFixture<NivelDesempAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelDesempAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelDesempAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
