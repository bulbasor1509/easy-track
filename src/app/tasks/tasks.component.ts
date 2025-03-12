import {Component, input, output, signal} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {DUMMY_USERS} from '../users';
import {NewTaskComponent} from './new-task/new-task.component';

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
    tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
                'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
                'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },
    ]

    get userName(){
        const user = DUMMY_USERS.find(user => user.id === this.userId())
        return user?.name
    }

    get userTasks(){
        return this.tasks.filter(task => task.userId === this.userId())
    }

    onTaskComplete(taskId: string){
        this.tasks = this.tasks.filter(task => task.id !== taskId)
    }

    onPopupClosed(){
        this.addTaskBtn.set(false);
    }

    showAddTask(){
        this.addTaskBtn.set(true)
    }
}
