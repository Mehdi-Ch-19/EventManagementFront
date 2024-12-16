import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventParticipant } from '../models/EventParticipant';
import { environment } from '../../../enviroments/environment';
import { ResponceDto } from '../auth/models/ResponceDto';
import { ParticipantEvents } from '../auth/models/ParticipantEvents';
import { Participant } from '../models/Participant';
import { ParticipantDto } from '../models/PartticipantDto';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  participantEndpoint = "/api/v1/participant"
  constructor(private http :HttpClient) { }

  getallEventsParticipant(id:number):Observable<ParticipantEvents>{
    return this.http.get<ParticipantEvents>(environment.apiUrl + this.participantEndpoint + "/"+id+"/events")
  }
  getparticipantinfo(id:number):Observable<any>{
    return this.http.get<any>(environment.apiUrl+this.participantEndpoint+"/"+id)
  }
  updatePartcipant(partcipantDto : ParticipantDto , id:number):Observable<ParticipantDto>{
    return this.http.post(environment.apiUrl+this.participantEndpoint+"/update/"+id,partcipantDto)
  }

}
