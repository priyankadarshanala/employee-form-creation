import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule ,Routes} from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthService } from './auth.service';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoService } from './todo.service';
import{HttpClientModule} from '@angular/common/http';
const routes:Routes=[
  {path:'',pathMatch:"full",redirectTo:'home'},
  {
    path:'home',component:HomeComponent
},{
  path:"about",component:AboutComponent
},
{
  path:'notfound',component:NotfoundComponent
},
{
  path:'contact',component:ContactComponent,canActivate:[AuthService]}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    NotfoundComponent,
    TodoformComponent,
    TodolistComponent,
    
 
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  
 
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
