import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../enviroments/environment";
import { Observable } from "rxjs";
import { Responce } from "../models/Responce";

@Injectable({
  providedIn: 'root'
})
export class OrganizatorService{
    organizatorendpoint = "/api/v1/organizator"
    constructor(private http :HttpClient) { }

    getAllEventsByOrganizator(id:number):Observable<Responce>{
        return this.http.get<Responce>(environment.apiUrl+this.organizatorendpoint+"/"+id+"/events")
    }
}