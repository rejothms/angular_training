import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  private lTitle = 'angular!';
  private num1 = 10;
  private num2 = 20;
  private imageSrc = "https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png";

  public items: Array<number>;
  public value = 'react';
  public color = 'green';
  public images: Array<any> = [];

  public bDay = new Date(1991, 3, 15);

  public patients: Array<any>;

  public user: any;

  ngOnInit() {

    

  }

 
  constructor() {


    this.patients = [

      {
        place: 'trivandrum',
        count: 20
      },
      
      {
        place: 'Kollam',
        count: 4
      },
      
      {
        place: 'pathanamthitta',
        count: 30
      },
      
      {
        place: 'Alappuzha',
        count: 2
      }


    ]





    this.items = [1, 2, 3, 4];

    this.user = {
      name: 'bineesh'
      
    }

    this.images = [
      'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      'https://homepages.cae.wisc.edu/~ece533/images/baboon.png'
    ]

  }

  public onClickBtn() {
   // this.value = "arun";

  }

  public userLogin(user) {
    console.log(user);
  }

}
