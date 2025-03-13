import {Component, input, output} from '@angular/core';
import {TaskType} from '../../types';
import {CardComponent} from '../../shared/card/card.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-task',
    imports: [
        CardComponent,
        DatePipe
    ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
    task = input.required<TaskType>()
    completedTask = output<string>()

    onTaskComplete(){
        this.completedTask.emit(this.task().id)
    }
}
