import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular008AboutComponent } from './angular008-about.component';

describe('Angular008AboutComponent', () => {
  let component: Angular008AboutComponent;
  let fixture: ComponentFixture<Angular008AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular008AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular008AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
