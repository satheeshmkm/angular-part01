import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular008ComponentTwoComponent } from './angular008-component-two.component';

describe('Angular008ComponentTwoComponent', () => {
  let component: Angular008ComponentTwoComponent;
  let fixture: ComponentFixture<Angular008ComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular008ComponentTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular008ComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
