import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular004PipesComponent } from './angular004-pipes.component';

describe('Angular004PipesComponent', () => {
  let component: Angular004PipesComponent;
  let fixture: ComponentFixture<Angular004PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular004PipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular004PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
