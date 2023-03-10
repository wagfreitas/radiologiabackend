import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMascarasComponent } from './dialog-mascaras.component';

describe('DialogMascarasComponent', () => {
  let component: DialogMascarasComponent;
  let fixture: ComponentFixture<DialogMascarasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogMascarasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMascarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
