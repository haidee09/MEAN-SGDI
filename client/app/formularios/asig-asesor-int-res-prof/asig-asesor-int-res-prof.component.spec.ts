import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigAsesorIntResProfComponent } from './asig-asesor-int-res-prof.component';

describe('AsigAsesorIntResProfComponent', () => {
  let component: AsigAsesorIntResProfComponent;
  let fixture: ComponentFixture<AsigAsesorIntResProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsigAsesorIntResProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsigAsesorIntResProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
