import {Injectable, signal} from '@angular/core';
import {TaskType} from '../types';

@Injectable({providedIn: "root"})
export class TasksService {
    private tasks = signal<TaskType[]>([]);

    constructor() {
        const tasks = localStorage.getItem("tasks")
        if(tasks){
            this.tasks.set(JSON.parse(tasks))
        }
    }

    private saveTasks(){
        localStorage.setItem("tasks", JSON.stringify(this.tasks()))
    }

    getUserTasks(userId: string){
        return this.tasks().filter(
            task => task.userId === userId
        );
    }

    addTask(task: TaskType){
        this.tasks.update(
            tasks => [...tasks, task]
        )
        this.saveTasks()
    }

    removeTask(taskId: string){
        this.tasks.update(
            tasks => tasks.filter(
                task => task.id !== taskId
            )
        )
        this.saveTasks()
    }
}
