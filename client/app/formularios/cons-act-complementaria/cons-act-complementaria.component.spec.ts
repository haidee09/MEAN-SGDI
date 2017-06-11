import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsActComplementariaComponent } from './cons-act-complementaria.component';

describe('ConsActComplementariaComponent', () => {
  let component: ConsActComplementariaComponent;
  let fixture: ComponentFixture<ConsActComplementariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsActComplementariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsActComplementariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
