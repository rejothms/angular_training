import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public smileyType = 'H';
  public values = [1, 2, 4, 5, 57, 8];
  constructor() { }

  @Input()
  public items;

  @Output()
  disp = new EventEmitter<any>();

  ngOnInit() {
    console.log(this.items);
  }

  private updateSmiley(event, value: string) {
    console.log(value);
    this.smileyType = value;
    this.disp.emit(value);
  }

}
