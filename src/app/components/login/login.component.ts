import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewChecked } from '@angular/core';
import { AuthenicationService } from 'src/app/services/authenication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenicationService]
})
export class LoginComponent implements OnChanges, OnInit, AfterViewChecked {

  @Input()
  private loginTitle;

  @Output()
  disp = new EventEmitter<any>();


  constructor(private authService: AuthenicationService) { }

  ngOnChanges() {

    console.log('changes');
  }

  ngOnInit() {

    this.initialization()

  }

  ngAfterViewChecked() {


  }

  private initialization(): void {
    //http request 
   }



  public login() {


   this.authService.setAuthId('1234');

   /*  let user = {
      name:  this.loginTitle,
      password: 'pass'
    };

    console.log(this.loginTitle);

    this.disp.emit(user); */

  }

}
