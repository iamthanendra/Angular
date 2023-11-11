import { Component } from '@angular/core';

@Component({
  selector: 'app-test-class',
  templateUrl: './test-class.component.html',
  styleUrls: ['./test-class.component.css']
})
export class TestClassComponent {
  backgroundColor:string="";
  changeBG(bgcolor:string){
    this.backgroundColor = "bg-"+bgcolor;
  }
}
