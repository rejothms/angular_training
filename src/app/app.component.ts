import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private title = 'angular!';
  private num1 = 10;
  private num2 = 20;
  private imageSrc = "https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png";

  public items: Array<number>;
  public value = 'bineesh';

  constructor() {

    this.items = [1, 2, 3, 4];

  }

  public onClickBtn() {
    this.value = "arun";

  }

}
