import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TaskComponent,
    AddTaskComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
		FormsModule
  ],
	exports:[
		MainPageComponent
	]
})
export class ToDoListModule { }
