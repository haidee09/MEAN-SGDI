import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicMantComponent } from './solic-mant.component';

describe('SolicMantComponent', () => {
  let component: SolicMantComponent;
  let fixture: ComponentFixture<SolicMantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicMantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicMantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
