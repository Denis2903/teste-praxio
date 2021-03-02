import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestLogin } from '../models/login.model';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Input() public loginForm: FormGroup

  constructor(
      @Inject(Router) public router: Router,
      @Inject(LoginService) public loginService: LoginService,
      private fb: FormBuilder
  ){

    this.loginForm = this.fb.group({
        'email':[''],
        'senha':['']
    })
  }

  ngOnInit(){
  }

  //funçao que fara a request para a "service" e consultar se o usuario em questão tem acesso.
  getLogin(){
     const filtro: RequestLogin = new RequestLogin
     filtro.email = this.loginForm.get('email').value
     filtro.senha = this.loginForm.get('senha').value
     this.loginService.getLogin(filtro).subscribe((response:any)=>{
       if(response === true){
         this.router.navigate(['home'])
       }
     })
     console.log(filtro)

  }
}
