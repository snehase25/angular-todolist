import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listTask: string[] = [];
  newTask: string = "";
  countTaskDone : number = 0;
  isTaskDone: string ="";
  isButtonEnable:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    this.listTask.push(this.newTask);
    this.newTask="";
    this.isButtonEnable = true;
  }

  markUnmarkTask(index:any){
    let selectedTask = document.getElementById(index);
    let taskOldClass = selectedTask?.getAttribute("class");
    let taskNewClass = taskOldClass == "task-done" ? "task-undone" : "task-done";
    selectedTask?.setAttribute("class",taskNewClass);
    this.countTaskDone = taskNewClass == "task-done" ? this.countTaskDone+1 : this.countTaskDone-1;
  }

  enableAddTask(){
    this.isButtonEnable = false;
  }
}
