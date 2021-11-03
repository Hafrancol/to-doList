import { Injectable } from '@angular/core';
import { Task } from '../interfaces/to-do-list.interface';
@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
	
	private taskList:Task[] = [
		{
			content: "Tare1",
			completed:false,
		},
		{
			content: "Tare2",
			completed:false,
		},
		{
			content: "Tare3",
			completed:false,
		},
		{
			content: "Tare4",
			completed:false,
		}

	]

	get tasks():Task[]{
		return [...this.taskList];
	}

	addTask(task:Task){
		console.log('heyy')
		this.taskList.push(task);
	}

	deleteTask(index: number){
		this.taskList = this.taskList.filter((v,i)=>{

			return (index !== i) 
		});
	}

	toogleCompleted(index:number, completed:boolean){
		this.taskList[index].completed = completed;
		console.log(this.taskList[index].completed)
	}








  constructor() { }
}
