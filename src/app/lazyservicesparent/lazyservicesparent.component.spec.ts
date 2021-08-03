import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyservicesparentComponent } from './lazyservicesparent.component';

describe('LazyservicesparentComponent', () => {
  let component: LazyservicesparentComponent;
  let fixture: ComponentFixture<LazyservicesparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyservicesparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyservicesparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
