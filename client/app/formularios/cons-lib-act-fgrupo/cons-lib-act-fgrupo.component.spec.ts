import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsLibActFgrupoComponent } from './cons-lib-act-fgrupo.component';

describe('ConsLibActFgrupoComponent', () => {
  let component: ConsLibActFgrupoComponent;
  let fixture: ComponentFixture<ConsLibActFgrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsLibActFgrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsLibActFgrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
