import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { routing } from "./app.routes";
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import {HttpClientModule} from "@angular/common/http"
import { HomeComponent } from './home/home.component';
import { HeaderHomeComponent } from './home/header-home/header-home.component';
import { CardsHomeComponent } from './home/cards-home/cards-home.component';
import { FooterHomeComponent } from './home/footer-home/footer-home.component';
import { NavHomeComponent } from './home/nav-home/nav-home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderHomeComponent,
    CardsHomeComponent,
    FooterHomeComponent,
    NavHomeComponent,
    LoginComponent,
    RegisterComponent,
   
    
    
    
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
   routing,
   ReactiveFormsModule,
   NgxMaskModule.forRoot(),
   HttpClientModule,
   
   
  
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
