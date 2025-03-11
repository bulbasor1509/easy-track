import {Component, computed, input, Input, output, signal} from '@angular/core';
import {DUMMY_USERS} from '../users';

interface UserType {
    id: string
    avatar: string
    name: string
}

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
    selector: 'app-user',
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
    user = input.required<UserType>();
    imagePath = computed(() => "assets/users/" + this.user().avatar);
    selectedUser = output<string>();

    onSelectUser(){
        this.selectedUser.emit(this.user().id)
    }
}
