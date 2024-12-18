import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequestDto } from '../models/LoginRequestDto';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginSucessResponceDto } from '../models/LoginSucessResponce';
import { environment } from '../../../../enviroments/environment';
import { TokenService } from './token.service';
import {  RegisterDto } from '../models/RegisterDto';
import { ResponceDto } from '../models/ResponceDto';
import { jwtDecode } from 'jwt-decode';
import { JwtResponce } from '../models/JwtResponce';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   authenticationEndpoint = "/api/v1/auth/login"
   logoutendpoint="/api/v1/auth/logout"
   registrationEndpoint = "/api/v1/auth/register"
     userDataSubject: BehaviorSubject<any> = new BehaviorSubject({});
   userData$: Observable<any> = this.userDataSubject.asObservable();
  constructor(private http : HttpClient , private tokenservice : TokenService , private router:Router) { 
    
  }

  login(loginRequest:LoginRequestDto):Observable<any>{
    return this.http.post<LoginSucessResponceDto>(environment.apiUrl + this.authenticationEndpoint,loginRequest).pipe((tap(result=>{
      const access_token = result.data.token
      this.userDataSubject.next({token:result.data.token,
        email:result.data.email,
        role:result.data.role,
        id:result.data.id,});
      this.tokenservice.storeUserId(result.data?.id!)
      this.tokenservice.storeAccessToken(result.data?.token!)
    })))
  }

  register(registerDto:RegisterDto):Observable<ResponceDto>{
    return this.http.post<ResponceDto>(environment.apiUrl+ this.registrationEndpoint,registerDto)
  }
  get userData(): any {
    // return userData(userInfo, access_token, refresh_token) or null
    return this.userDataSubject.getValue
  }
  get isAuthenticated(): boolean {
    const accessToken = localStorage.getItem("accessToken")
    if (!accessToken) {
      return false
    }
    return this.isAuthTokenValid(accessToken)
  }
  logout() {
    this.http.post(environment.apiUrl+this.logoutendpoint,null).subscribe()
    this.tokenservice.deleteAccessToken()
    this.tokenservice.deleteUserId()
    this.userDataSubject.next(null);
    // Call http logout method for block refresh token

    this.router.navigate(['account/login'])
  }

  isAuthTokenValid(token: string): boolean {
    const decoded: any = jwtDecode(token);
    // default decoded exp format is second
    console.log(decoded)
    const expMilSecond: number = decoded?.exp * 1000; // milliseconds
    const currentTime = Date.now(); // milliseconds
    console.log(expMilSecond + " and " +currentTime )
    if (expMilSecond < currentTime) {
      return false;
    }
    return true;
  }
  getUserDataFromToken(token: string): any {
    const decoded: any = jwtDecode(token);
    return decoded.data
  }
}


