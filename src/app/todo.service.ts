import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  getcontacts(){
    // http calls here
    const contactList=[
      {contactId:1,contactname:'pinky'},
      {mobileId:2,contactname:'john'},
      {mobileId:3,contactname:'prema'},
      {mobileId:4,contactname:'nani'},
      {mobileId:5,contactname:'Raj'},
    ];
    return contactList;

  }

}
