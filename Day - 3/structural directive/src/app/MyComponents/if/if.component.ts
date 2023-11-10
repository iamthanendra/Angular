import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent {
  isApproved:boolean = false;
  approval(approve:boolean)
  {
    this.isApproved = approve;
  }
}
