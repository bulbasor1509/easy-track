import {Component, output, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './users';
import {TasksComponent} from './tasks/tasks.component';

@Component({
    selector: "app-root",
    imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
    templateUrl: "app.component.html",
    styleUrl: "app.component.css"
})

export class AppComponent {
    users = DUMMY_USERS
    selectedUserId = signal<string>("u1")

    get selectedUser(){
        return this.users.find(user => user.id === this.selectedUserId())!;
    }

    onSelectedUser(id: string){
        this.selectedUserId.set(id)
    }
}
