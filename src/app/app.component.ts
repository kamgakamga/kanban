import { Component } from '@angular/core';
import { TaskDialogResult } from './task-dialog/task-dialog.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { Task } from './task/task';
import { MatDialog } from '@angular/material/dialog';
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


constructor(private dialog : MatDialog){}

newTask() :void{
  console.log("Bouton de creation appelle.");
  
  const dialogRef = this.dialog.open(TaskDialogComponent, {
    width: '270px',
    data: {
      task: {},
    },
  });
  // On s'abonne a l'evenement de fermeture de 
  // la boite de dialogue, puis on ajout le resultat au tableau des taches a faires 
  dialogRef
    .afterClosed()
    .subscribe((result: TaskDialogResult|undefined) => {
      if (!result) {
        return;
      }
      this.todo.push(result.task);
    });
}




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
