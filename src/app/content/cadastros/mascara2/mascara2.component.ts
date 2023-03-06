import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-mascara2',
  templateUrl: './mascara2.component.html',
  styleUrls: ['./mascara2.component.css']
})
export class Mascara2Component implements OnInit {

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.taskForm = this.fb.group({
      taskList: this.fb.array([this.createTask()])
    });
  }

  createTask(): FormGroup {
    return this.fb.group({
      taskName: ['', Validators.required],
      taskDescription: [''],
      dueDate: ['']
    });
  }

  addTask() {
    const taskList = this.taskForm.get('taskList') as FormArray;
    taskList.push(this.createTask());
  }

  removeTask(index: number) {
    const taskList = this.taskForm.get('taskList') as FormArray;
    taskList.removeAt(index);
  }

  submitForm() {
    console.log(this.taskForm.value);
    this.taskForm.reset();
    const taskList = this.taskForm.get('taskList') as FormArray;
    taskList.clear();
  }
}
