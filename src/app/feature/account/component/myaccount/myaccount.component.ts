import { Component, OnInit } from '@angular/core';
import { EventParticipant } from '../../../../core/models/EventParticipant';
import { ParticipantService } from '../../../../core/services/participant.service';
import { AuthService } from '../../../../core/auth/services/auth.service';
import { TokenService } from '../../../../core/auth/services/token.service';
import { Participant } from '../../../../core/models/Participant';
import { ParticipantDto } from '../../../../core/models/PartticipantDto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrl: './myaccount.component.css'
})
export class MyaccountComponent implements OnInit {
  events :EventParticipant[] = []
  partcicipantInfo! : ParticipantDto 
  id!:number
  constructor(private participantService : ParticipantService , private auth:AuthService,private tokenservice:TokenService){

  }
  ngOnInit(): void {
    console.log("myaccount")
    this.id = this.tokenservice.getUserId()
    this.participantService.getparticipantinfo(this.id).subscribe(result=>{
      console.log(result.data)
      this.partcicipantInfo = result.data
    })
    this.participantService.getallEventsParticipant(this.id).subscribe(responce=>{
      this.events = responce.data
    })    
  }

  updatePartcipant(event:any){
    this.participantService.updatePartcipant(event,this.id).subscribe(responce=>{
      this.partcicipantInfo = responce
    })
  }

  logout(){
    console.log("logoy")
    Swal.fire({
      title: 'Do you want to logout ?',
      showDenyButton: true,
      confirmButtonText: 'Logout',
      denyButtonText: `Nop`,
      customClass:{title:'titleclass'}
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.auth.logout()
      } else if (result.isDenied) {
      }
    })
  }
}
