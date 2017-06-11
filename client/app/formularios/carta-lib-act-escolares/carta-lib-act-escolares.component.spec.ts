import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaLibActEscolaresComponent } from './carta-lib-act-escolares.component';

describe('CartaLibActEscolaresComponent', () => {
  let component: CartaLibActEscolaresComponent;
  let fixture: ComponentFixture<CartaLibActEscolaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaLibActEscolaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaLibActEscolaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
