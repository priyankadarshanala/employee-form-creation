import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor( private httpclient: HttpClient) { }
  getContacts(){
  return this.httpclient.get('http://localhost:3000/contact');  //getmethod
  }

  saveUser(data:any){
    return this.httpclient.post('http://localhost:3000/contact',data); //pushmethod
    }

   updateContact(contactId:any,updatedBody:any) {
    const endpointURL ="http://localhost:3000/contact/"+contactId;  //putmethod
    return this.httpclient.put(endpointURL,updatedBody);
   }
   
   deleteContact(contactId:any){
    const deleteEndPoint ="http://localhost:3000/contact/"+contactId;  //deletemethod
    return this.httpclient.delete(deleteEndPoint );
   }

}
