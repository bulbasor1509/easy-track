import {Component, inject, input, output, signal} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {DUMMY_USERS} from '../users';
import {NewTaskComponent} from './new-task/new-task.component';
import {OutputTaskType, TaskType} from '../types';
import {v4 as uuidv4} from 'uuid';
import {TasksService} from './task.service';


@Component({
    selector: 'app-tasks',
    imports: [
        TaskComponent,
        NewTaskComponent
    ],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent {
    userId = input.required<string>();
    addTaskBtn = signal<boolean>(false);
    private tasksService = inject(TasksService)

    get userName(){
        const user = DUMMY_USERS.find(user => user.id === this.userId())
        return user?.name
    }

    get userTasks(){
        return this.tasksService.getUserTasks(this.userId())
    }

    onTaskComplete(taskId: string){
        this.tasksService.removeTask(taskId);
    }

    onPopupClosed(){
        this.addTaskBtn.set(false);
    }

    onAppendTask(task: OutputTaskType){
        this.tasksService.addTask({
            id: uuidv4(),
            userId: this.userId(),
            title: task.title,
            summary: task.summary,
            dueDate: task.dueDate
        })
    }

    showAddTask(){
        this.addTaskBtn.set(true)
    }
}
