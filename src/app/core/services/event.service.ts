import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventDto } from '../models/EventDto';
import { environment } from '../../../enviroments/environment';
import { Responce } from '../models/Responce';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventendpoint = "/api/v1/event"

  constructor(private http :HttpClient) { }
  
  getUpcomingEvents():Observable<Responce>{
    return this.http.get<Responce>(environment.apiUrl+this.eventendpoint+"/upcoming")
  }
}
