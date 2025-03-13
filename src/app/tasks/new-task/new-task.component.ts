import {Component, input, output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {OutputTaskType, TaskType} from '../../types';
import {inject} from '@angular/core';
import {TasksService} from '../task.service';
import {v4 as uuidv4} from 'uuid';

@Component({
    selector: 'app-new-task',
    imports: [
        FormsModule
    ],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
    userId = input.required<string>();
    close = output();
    enteredTask = output<OutputTaskType>()
    enteredTitle = signal<string>("");
    enteredSummary = signal<string>("");
    enteredDate = signal<string>("");
    private tasksService = inject(TasksService);

    onCancel(){
        this.close.emit()
    }

    onFormSubmit(){
        this.tasksService.addTask({
            id: uuidv4(),
            userId: this.userId(),
            title: this.enteredTitle(),
            summary: this.enteredSummary(),
            dueDate: this.enteredDate()
        })
        this.close.emit()
    }
}
