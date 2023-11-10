import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() myvalue:string ="this is my value";
  inputValue:string ="";
  disabled:boolean = false;
  verify()
  {
    if(this.inputValue == "Submitted") this.disabled = true;

  }

}
