import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName = 'To Do List';

  newTask:string = "";
  newTime:string = "";

  taskList:{Task:string, Time:string}[] = [
    {"Task":"Exercise", "Time":"8 AM"},
    {"Task":"Breakfast", "Time":"9 AM"},
    {"Task":"Attend Daily Scrum", "Time":"10 AM"},
    {"Task":"Read Pending Mails", "Time":"11 AM"},
    {"Task":"Complete Angular Leaning", "Time":"12 PM"},
    {"Task":"Test Task 1", "Time":"1 PM"},
    {"Task":"Test Task 2", "Time":"2 PM"},
    {"Task":"Test Task 3", "Time":"3 PM"},
  ]

  addNewTask ( ){
    console.log("Inside Add New Task Function....");
    console.log("New Task :: ", this.newTask)
    console.log("New Time :: ", this.newTime)
    this.taskList.push({"Task":this.newTask, "Time":this.newTime})
    this.newTask="";
    this.newTime="";
  }

  deleteTask(event:Event){
    let taskNumber = parseInt((event.target as HTMLButtonElement).name);
    console.log("Deleting Task Number ::", taskNumber+1);
    this.taskList.splice(taskNumber, 1);
    console.log("Task Deleted !!!");
  }
}
