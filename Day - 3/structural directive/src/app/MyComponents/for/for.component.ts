import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {
  items:string[] = ["item 1","item 2", "item 3", "item 4", "item 5"];
}
