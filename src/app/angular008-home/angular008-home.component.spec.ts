import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular008HomeComponent } from './angular008-home.component';

describe('Angular008HomeComponent', () => {
  let component: Angular008HomeComponent;
  let fixture: ComponentFixture<Angular008HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular008HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular008HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
