import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaSegResProfComponent } from './eva-seg-res-prof.component';

describe('EvaSegResProfComponent', () => {
  let component: EvaSegResProfComponent;
  let fixture: ComponentFixture<EvaSegResProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaSegResProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaSegResProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
