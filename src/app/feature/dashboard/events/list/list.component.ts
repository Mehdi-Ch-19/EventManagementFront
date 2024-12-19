import { Component, OnInit } from '@angular/core';
import { EventData } from '../../../../core/models/EventData';
import { EventService } from '../../../../core/services/event.service';
import { OrganizatorService } from '../../../../core/services/organizator.service';
import { AuthService } from '../../../../core/auth/services/auth.service';
import { TokenService } from '../../../../core/auth/services/token.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  events :EventData[] =  []
  
  constructor(private organizatorservice : OrganizatorService , 
    private eventservice:EventService,
    private router:Router,
    private tokenservice:TokenService){

  }

  ngOnInit(): void {
    this.getAllEventsByOrganizator()
  }
  getAllEventsByOrganizator(){
    this.organizatorservice.getAllEventsByOrganizator(this.tokenservice.getUserId()).subscribe(result=>{
      this.events = []
      for (let e of result.data) {
        let eventbycat: EventData = new EventData()
        eventbycat = e
        this.events.push(eventbycat)
      }
    })
  }
  redirectAdd(){
      this.router.navigate(["dashboard/events/add"])
  }
  edititem(i:number){
    this.router.navigate(["dashboard/events/edit/",this.events[i].eventid])

  }
  deleteProdcut(i :number){
    Swal.fire({
      title: 'Do you want to delete '+this.events[i].title,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        /*http call to backend*/
        this.eventservice.deleteEvent(this.events[i].eventid!).subscribe(p=>{
          this.getAllEventsByOrganizator()
          Swal.fire('Deleted!', '', 'success')
        },
        err=>{
          Swal.fire('Somthing went wrong !', '', 'error')
        })
          
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  

  }

}
