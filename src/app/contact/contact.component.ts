import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
// msgTrue:any='updated successfully';
  constructor(private contactservice: ContactsService) { }
  contactList: any;
  ngOnInit(): void //about getmethod
   {
    this.contactList = this.contactservice.getContacts().subscribe(data => {
      this.contactList = data;
    });
  }
  //about postmethod
  getUserFormData(data: any) {
    console.warn(data)
    this.contactservice.saveUser(data).subscribe((data: any) => {
      console.warn(data)
    });

  }
//about putmethod or updatemethod
  updateContact(contactId:any){
    const newFormData={id:contactId,Name:'Anju',email:'anju@gmail.com'};
    this.contactservice.updateContact(contactId,newFormData).subscribe((data: any) => {
     console.log(data);
  });
  }
  //about deletemethod
  deleteContact(contactId:any ){
    
    this.contactservice.deleteContact(contactId).subscribe((data: any) => {
     console.log(data);
  });
}
}