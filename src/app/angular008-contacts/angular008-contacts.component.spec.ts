import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular008ContactsComponent } from './angular008-contacts.component';

describe('Angular008ContactsComponent', () => {
  let component: Angular008ContactsComponent;
  let fixture: ComponentFixture<Angular008ContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular008ContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular008ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
