import { Component } from '@angular/core';

import { Task } from './task/task';
import { CdkDrag, CdkDragDrop, CdkDropList, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  
  todo : Task[] = [
    {
      title :'titre1',
      description :'description1',
    },
    {
      title :'titre2',
      description :'description2',
    },
  ];

  done : Task[] = [
    {
      title :'titre3',
      description :'description3',
    },
    {
      title :'titre4',
      description :'description4',
    },
  ];
  inProgress: Task[] = [];


  editTask(list: string, task: Task): void {}

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
