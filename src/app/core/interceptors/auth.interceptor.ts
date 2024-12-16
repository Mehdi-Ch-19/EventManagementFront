import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, skip, switchMap, take } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { Token } from '@angular/compiler';
import { TokenService } from '../auth/services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService,private tokenservice:TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // stage 1: Check if request for refresh token
   
   
    const data = this.authService.userData;
    const accessToken = this.tokenservice.getAccessToken();
    
    // stage 2: Checking access_token exists(mean user logged in) or not
    if (accessToken!= null) {
      // stage 3: checking access_token validity
      console.log("interceptor toke validity   " +this.authService.isAuthTokenValid(accessToken))
      if (this.authService.isAuthTokenValid(accessToken)) {
        let modifiedReq = request.clone({
          headers: request.headers.append('Authorization', `Bearer ${accessToken}`)
        });
        return next.handle(modifiedReq)
      }
  }
  return next.handle(request);
}
}
 