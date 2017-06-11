import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AseIntResProfComponent } from './ase-int-res-prof.component';

describe('AseIntResProfComponent', () => {
  let component: AseIntResProfComponent;
  let fixture: ComponentFixture<AseIntResProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AseIntResProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AseIntResProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
