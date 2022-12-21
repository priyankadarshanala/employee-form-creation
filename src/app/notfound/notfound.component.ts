import { Component, OnInit } from '@angular/core';
import{TodoService }from '../todo.service';
@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor( private todoservice:TodoService) { }
 
  
  ngOnInit(): void {
  
  }
  
}
