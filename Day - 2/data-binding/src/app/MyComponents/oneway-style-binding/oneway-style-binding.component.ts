import { Component } from '@angular/core';

@Component({
  selector: 'app-oneway-style-binding',
  templateUrl: './oneway-style-binding.component.html',
  styleUrls: ['./oneway-style-binding.component.css']
})
export class OnewayStyleBindingComponent {
  mystyle = {"color":"red", "background-color":"whitesmoke"};
}
