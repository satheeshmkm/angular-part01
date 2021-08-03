import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular008PageNotFoundComponent } from './angular008-page-not-found.component';

describe('Angular008PageNotFoundComponent', () => {
  let component: Angular008PageNotFoundComponent;
  let fixture: ComponentFixture<Angular008PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular008PageNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular008PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
