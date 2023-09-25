import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, TaskComponent],
  imports: [BrowserModule,MatToolbarModule,MatIconModule,MatCardModule,DragDropModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
