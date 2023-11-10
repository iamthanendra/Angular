import { Component } from '@angular/core';

@Component({
  selector: 'app-oneway-class-binding',
  templateUrl: './oneway-class-binding.component.html',
  styleUrls: ['./oneway-class-binding.component.css']
})
export class OnewayClassBindingComponent {
  redClass:string;
  applyCSSClass:boolean;
  applyCSSTrueClass:boolean;
  constructor()
  {
    this.redClass = "red";
    this.applyCSSClass = false;
    this.applyCSSTrueClass = true;

  }
}
