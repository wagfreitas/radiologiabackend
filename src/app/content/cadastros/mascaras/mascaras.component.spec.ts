import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascarasComponent } from './mascaras.component';

describe('MascarasComponent', () => {
  let component: MascarasComponent;
  let fixture: ComponentFixture<MascarasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascarasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
