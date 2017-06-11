import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberacionActEscolaresComponent } from './liberacion-act-escolares.component';

describe('LiberacionActEscolaresComponent', () => {
  let component: LiberacionActEscolaresComponent;
  let fixture: ComponentFixture<LiberacionActEscolaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiberacionActEscolaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiberacionActEscolaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
