import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseComponentsComponent } from './exercise-components.component';

describe('ExerciseComponentsComponent', () => {
  let component: ExerciseComponentsComponent;
  let fixture: ComponentFixture<ExerciseComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
