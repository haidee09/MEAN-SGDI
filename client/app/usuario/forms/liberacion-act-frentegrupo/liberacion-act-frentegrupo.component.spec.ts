import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberacionActFrentegrupoComponent } from './liberacion-act-frentegrupo.component';

describe('LiberacionActFrentegrupoComponent', () => {
  let component: LiberacionActFrentegrupoComponent;
  let fixture: ComponentFixture<LiberacionActFrentegrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiberacionActFrentegrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiberacionActFrentegrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
