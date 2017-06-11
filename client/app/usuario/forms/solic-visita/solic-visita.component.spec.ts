import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicVisitaComponent } from './solic-visita.component';

describe('SolicVisitaComponent', () => {
  let component: SolicVisitaComponent;
  let fixture: ComponentFixture<SolicVisitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicVisitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
