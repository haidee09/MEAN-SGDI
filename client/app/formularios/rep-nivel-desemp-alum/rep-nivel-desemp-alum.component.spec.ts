import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepNivelDesempAlumComponent } from './rep-nivel-desemp-alum.component';

describe('RepNivelDesempAlumComponent', () => {
  let component: RepNivelDesempAlumComponent;
  let fixture: ComponentFixture<RepNivelDesempAlumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepNivelDesempAlumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepNivelDesempAlumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
