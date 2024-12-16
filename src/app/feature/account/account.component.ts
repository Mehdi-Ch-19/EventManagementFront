import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{
  constructor(private auth : AuthService , private router : Router){}
  ngOnInit(): void {
    if(this.auth.isAuthenticated){
      this.router.navigate(["account/myaccount"])
    }else{
      this.router.navigate(["account/type"])
    }
  }
}
