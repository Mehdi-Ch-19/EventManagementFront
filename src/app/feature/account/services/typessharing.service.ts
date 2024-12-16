import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypessharingService {
  currentTypeLogin = new BehaviorSubject<string>("") 
  currentTypeRegister = new BehaviorSubject<string>("")
  constructor() { }

  settypes(type : string){
    this.currentTypeLogin.next(type)
  }
  setRegister(type :string){
    this.currentTypeRegister.next(type)
  }
}
