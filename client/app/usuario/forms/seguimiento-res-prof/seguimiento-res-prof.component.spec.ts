import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoResProfComponent } from './seguimiento-res-prof.component';

describe('SeguimientoResProfComponent', () => {
  let component: SeguimientoResProfComponent;
  let fixture: ComponentFixture<SeguimientoResProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoResProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoResProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
