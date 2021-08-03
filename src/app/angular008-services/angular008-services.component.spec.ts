import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular008ServicesComponent } from './angular008-services.component';

describe('Angular008ServicesComponent', () => {
  let component: Angular008ServicesComponent;
  let fixture: ComponentFixture<Angular008ServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular008ServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular008ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
