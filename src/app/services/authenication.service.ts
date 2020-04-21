import { Injectable } from '@angular/core';

@Injectable()
export class AuthenicationService {

  public authId: string;

  constructor() { }

  private getUserDetails() {

    //mockhttp service

  }


  public setAuthId(id: string) {
    this.authId = id;
  }

  public getAuthId(): string {
    return this.authId;
  }



}
