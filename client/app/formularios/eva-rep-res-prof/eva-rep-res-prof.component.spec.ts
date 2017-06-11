import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaRepResProfComponent } from './eva-rep-res-prof.component';

describe('EvaRepResProfComponent', () => {
  let component: EvaRepResProfComponent;
  let fixture: ComponentFixture<EvaRepResProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaRepResProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaRepResProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
