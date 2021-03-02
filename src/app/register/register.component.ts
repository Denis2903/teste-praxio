import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() public personalInfoForm: FormGroup
  @Input() public c: FormGroup

  cpfMask: '00.000.0000-00'

  

  constructor(
    public loginService: LoginService,
      private fb: FormBuilder,
     public router: Router,
  ) { 

    this.personalInfoForm = this.fb.group({
      'email':['',Validators.required],
      'senha':['',Validators.required],
      'phoneNumber':['',Validators.required],
      'documentNumber':['',Validators.required],
      'name':['']
  })
    this.c = this.fb.group({
      'countryCode':['',Validators.required],
      'alddress':['',Validators.required],
      'number':['',Validators.required],
      'district':['',Validators.required],
  })
  }

  ngOnInit() {
  }

  insertRegistry(){
  const payload: any = this.buildRegister()

  this.loginService.insert(payload).subscribe((res:any)=>{
     this.router.navigate([''])
  })

  } 

 buildRegister(){
    let filtro:any

    filtro.name = this.personalInfoForm.get('name').value
    filtro.documentNumber = this.personalInfoForm.get('documentNumber').value
    filtro.email = this.personalInfoForm.get('email').value
    filtro.senha = this.personalInfoForm.get('senha').value
    filtro.phoneNumber = this.personalInfoForm.get('phoneNumber').value
    filtro.contryCode = this.c.get('contryCode').value
    filtro.alddress = this.c.get('alddress').value
    filtro.number = this.c.get('number').value
    filtro.number = this.c.get('district').value

    return filtro
 }

}
