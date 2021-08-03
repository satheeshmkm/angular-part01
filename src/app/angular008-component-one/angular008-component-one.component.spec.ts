import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular008ComponentOneComponent } from './angular008-component-one.component';

describe('Angular008ComponentOneComponent', () => {
  let component: Angular008ComponentOneComponent;
  let fixture: ComponentFixture<Angular008ComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular008ComponentOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular008ComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
