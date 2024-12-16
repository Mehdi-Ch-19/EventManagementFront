import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/auth/services/auth.service';
import { TypessharingService } from '../../services/typessharing.service';
import { Participant } from '../../../../core/models/Participant';
import { User } from '../../../../core/models/User';
import { Organizator } from '../../../../core/models/Organizator';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  type : string = ""
  registerForm! :FormGroup 
 emailExists = false
  constructor(private typeservice:TypessharingService ,
    private router: Router, 
     private fb : FormBuilder ,private auth:AuthService){
    this.typeservice.currentTypeRegister.subscribe(type=>{
      console.log(type)
      this.type  = type
    })
  }
  ngOnInit(): void {
    if(this.type == "participant"){
       this.registerForm = this.fb.group({
        name:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required]]
    })
    }else{
      this.registerForm = this.fb.group({
        name:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required]],
        phoneNumber :['',[Validators.maxLength(10)  , Validators.pattern("^[0-9]*$")]],
        website :['',[Validators.required]]
    })
    }
  
  }
  onFormSubmit(form :FormGroup){
    const formData: any = form.value;
    console.log(formData)
    let user 
    if(this.type == "participant"){
      user  = new Participant()
      user.email = formData?.email
      user.name = formData?.name
      user.password = formData?.password
      user.type = this.type
    }else{
      user  = new Organizator()
      user.email = formData?.email
      user.name = formData?.name
      user.password = formData?.password
      user.phoneNumber = formData.phoneNumber
      user.website = formData?.website
      user.type = this.type
    }
    console.log(user)
    this.auth.register({user:user,type:this.type }).subscribe(responce=>{
      console.log({user:user,type:this.type })
      Swal.fire({
        title: "Welcome !!",
        text: "You registerd succuefuly!",
        icon: "success"
      })
      this.router.navigate(['/account/login'])
      console.log("login success")
    },error=>{
      Swal.fire({
        title: "Oops ..",
        text: "Your email aleady exists",
        icon: "error"
      })
      console.log(error)
     // this.emailExists = true
    })
  }

}
