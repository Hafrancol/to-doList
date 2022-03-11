import { Injectable, OnInit,AfterViewInit, AfterViewChecked } from '@angular/core';
import { Task } from '../interfaces/to-do-list.interface';
@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
	
	private taskList:Task[] = [
		{
			content: "Tare1",
			completed:true,
		},
		{
			content: "Tare2",
			completed:true,
		},
		{
			content: "Tare3",
			completed:false,
		},
		{
			content: "Tare4",
			completed:false,
		}

	];

	constructor() { 
		this.taskList = JSON.parse(localStorage.getItem('tasks') || '') || [...this.taskList]; // Inicializar la lista con lo que tenga el localStorage si no tiene entonces por default tendria la lista que esta en listtask
	}

	get tasks():Task[]{
		return [...this.taskList];
	}

	addTask(task:Task){
		this.taskList.push(task);
		localStorage.setItem('tasks',JSON.stringify(this.taskList));
	}

	deleteTask(index: number){
		this.taskList.splice(index,1);
		localStorage.setItem('tasks',JSON.stringify(this.taskList));
	}

	toogleCompleted(index:number, completed:boolean){
		this.taskList[index].completed = !completed;
		localStorage.setItem('tasks',JSON.stringify(this.taskList));
	}








 
}
