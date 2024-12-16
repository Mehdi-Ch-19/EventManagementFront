import { Component, OnInit } from '@angular/core';
import { TypessharingService } from '../../services/typessharing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../core/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  type : string = ""
  loginForm! :FormGroup 
  credentialswrong = false
  constructor(private typeservice:TypessharingService , 
    private router : Router,
    private fb : FormBuilder ,private auth:AuthService) {
    this.typeservice.currentTypeLogin.subscribe(type=>{
      this.type  = type
    })

  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }
  onFormSubmit(form :FormGroup){
    
    const formData: any = form.value;
    console.log(formData)
    this.auth.login({email:formData?.email,password:formData?.password,type:this.type }).subscribe(res=>{
      if(this.type == "participant"){
        this.router.navigate(["/account/myaccount"])
      }
    },error=>{
      this.credentialswrong = true
    })
  }


}
