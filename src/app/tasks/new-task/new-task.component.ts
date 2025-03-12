import {Component, output} from '@angular/core';

@Component({
    selector: 'app-new-task',
    imports: [],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
    isClosed = output()
    onCloseBtn(){
        this.isClosed.emit()
    }
}
