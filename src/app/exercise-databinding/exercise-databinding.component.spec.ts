import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDatabindingComponent } from './exercise-databinding.component';

describe('ExerciseDatabindingComponent', () => {
  let component: ExerciseDatabindingComponent;
  let fixture: ComponentFixture<ExerciseDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseDatabindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
