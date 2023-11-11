import { Component } from '@angular/core';

@Component({
  selector: 'app-test-style',
  templateUrl: './test-style.component.html',
  styleUrls: ['./test-style.component.css']
})
export class TestStyleComponent {
  applyStyle:boolean = false;
  toggleStyle(){
    this.applyStyle = !this.applyStyle;
  }
}
