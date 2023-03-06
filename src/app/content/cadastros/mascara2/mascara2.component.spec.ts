import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mascara2Component } from './mascara2.component';

describe('Mascara2Component', () => {
  let component: Mascara2Component;
  let fixture: ComponentFixture<Mascara2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mascara2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mascara2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
