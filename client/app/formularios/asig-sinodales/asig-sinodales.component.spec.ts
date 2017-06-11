import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigSinodalesComponent } from './asig-sinodales.component';

describe('AsigSinodalesComponent', () => {
  let component: AsigSinodalesComponent;
  let fixture: ComponentFixture<AsigSinodalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsigSinodalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsigSinodalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
