import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private title = 'ngapp';
  private user: any;
  private num1: number;
  private num2: number;
  private imgUrl = 'https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png';

  private username= 'hello';

  


  constructor() {

    this.num1 = 10;
    this.num2 = 20;

    this.title = this.username;

    this.user = {
      name: 'nme',
      details: {
        phone: '99324'
      }
    };


  }

 public updateDom() {
  this.user.details.email = 'email';
 }


  public addNumber() {
    return this.num1 + this.num2;
  }

  public checkUpdate(event) {
    console.log(event);
  }

}
