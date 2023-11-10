import { Component } from '@angular/core';

@Component({
  selector: 'app-oneway-event-binding',
  templateUrl: './oneway-event-binding.component.html',
  styleUrls: ['./oneway-event-binding.component.css']
})
export class OnewayEventBindingComponent {
  update!:string;
  view()
  {
    this.update = "Hello";
  }
}
