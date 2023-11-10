import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent {
  isApproved:boolean = false;
  approval(approve:boolean)
  {
    this.isApproved = approve;
  }
}
