import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteResProfComponent } from './reporte-res-prof.component';

describe('ReporteResProfComponent', () => {
  let component: ReporteResProfComponent;
  let fixture: ComponentFixture<ReporteResProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteResProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteResProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
