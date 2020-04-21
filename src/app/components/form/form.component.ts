import { Component, OnInit } from '@angular/core';
import { AuthenicationService } from 'src/app/services/authenication.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [AuthenicationService]
})
export class FormComponent implements OnInit {

  constructor(private authService: AuthenicationService) { }

  ngOnInit() {
  }


  public submitForm(): void {

    let id = this.authService.getAuthId();
    console.log(id);

  }


}
