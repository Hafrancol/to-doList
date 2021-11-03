import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/to-do-list.interface';
import { ToDoListService } from '../services/to-do-list.service';




@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

	get tasks(){
		return this.task.tasks;
	}

	delete(index: number){
		this.task.deleteTask(index);
	}

	toogleCompleted(index:number, completed:boolean){
		this.task.toogleCompleted(index,!completed)
	}


  constructor(private task:ToDoListService) { }

  ngOnInit(): void {
  }

}
