import {Component, computed, input, Input, output, signal} from '@angular/core';
import {DUMMY_USERS} from '../users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
    selector: 'app-user',
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
    id = input.required<string>();
    avatar = input.required<string>();
    name = input.required<string>();
    imagePath = computed(() => "assets/users/" + this.avatar());
    selectedUser = output<string>();

    onSelectUser(){
        this.selectedUser.emit(this.id())
    }
}
