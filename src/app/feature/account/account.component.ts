import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../../core/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit,OnChanges{
  constructor(private auth : AuthService , private router : Router){}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(this.auth.isAuthenticated){
      this.router.navigate(["account/myaccount"])
    }else{
      this.router.navigate(["account/type"])
    }  }
  ngOnInit(): void {
    console.log(this.auth.isAuthenticated)
    if(this.auth.isAuthenticated){
      this.router.navigate(["account/myaccount"])
    }else{
      this.router.navigate(["account/type"])
    }
  }
}
