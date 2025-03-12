import {Component, output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {OutputTaskType, TaskType} from '../../types';

@Component({
    selector: 'app-new-task',
    imports: [
        FormsModule
    ],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
    isClosed = output();
    enteredTask = output<OutputTaskType>()
    enteredTitle = signal<string>("");
    enteredSummary = signal<string>("");
    enteredDate = signal<string>("");

    onCloseBtn(){
        this.isClosed.emit()
    }

    onTaskCreate(){
        this.isClosed.emit()
    }


    onFormSubmit(){
        console.log("this is called")
        this.enteredTask.emit({
            title: this.enteredTitle(),
            summary: this.enteredSummary(),
            dueDate: this.enteredDate()
        })
        // console.log(this.enteredTitle)
    }
}
