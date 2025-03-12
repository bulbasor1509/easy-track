import {Component, computed, input, output} from '@angular/core';
import {UserType} from '../types';


@Component({
    selector: 'app-user',
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
    user = input.required<UserType>();
    selected = input.required<boolean>();
    imagePath = computed(() => "assets/users/" + this.user().avatar);
    selectedUser = output<string>();

    onSelectUser(){
        this.selectedUser.emit(this.user().id)
    }
}
