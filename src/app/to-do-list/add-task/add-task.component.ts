import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/to-do-list.interface';
import { ToDoListService } from '../services/to-do-list.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

	taskData:Task = {
		content: '',
		completed: false,

	}

  constructor(private task:ToDoListService) { }

		

		addtask(){
			if(this.taskData.content) this.task.addTask(this.taskData);
			this.taskData = {
				content: '',
				completed: false,
			}
		}


  ngOnInit(): void {
  }

}
