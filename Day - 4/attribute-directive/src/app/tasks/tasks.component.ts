import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  isButtonDisabled:boolean = true;
  numberDivisor:number = 0;
  b:boolean[] = [false, false, false, false];
  clear:boolean = true;
  int_array:number[] = [];

  constructor()
  {
    for(let i = 1; i <= 31; i++)
    {
      this.int_array.push(i);
    }
  }

  changeButton(index:number, divisor:number)
  {
    this.numberDivisor = divisor;
    for(let i = 0; i < this.b.length; i++)
    {
      if(i == index)
      {
        this.b[index] = true;
        continue;
      }
      this.b[i] = false;
    }
    this.clear = false;
    this.isButtonDisabled = false;
  }
  clearButton()
  {
    for(let i = 0; i < this.b.length; i++)
    {
      this.b[i] = false;
    }
    this.clear = false; 
    this.isButtonDisabled =  true;
  }
}
