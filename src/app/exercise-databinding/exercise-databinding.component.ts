import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-databinding',
  templateUrl: './exercise-databinding.component.html',
  styleUrls: ['./exercise-databinding.component.scss'],
})
export class ExerciseDatabindingComponent implements OnInit {
  inputName: string = '';
  isInputValue: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
