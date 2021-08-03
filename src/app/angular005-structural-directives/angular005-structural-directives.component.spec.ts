import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular005StructuralDirectivesComponent } from './angular005-structural-directives.component';

describe('Angular005StructuralDirectivesComponent', () => {
  let component: Angular005StructuralDirectivesComponent;
  let fixture: ComponentFixture<Angular005StructuralDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular005StructuralDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular005StructuralDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
