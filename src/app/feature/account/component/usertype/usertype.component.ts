import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TypessharingService } from '../../services/typessharing.service';

@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.component.html',
  styleUrl: './usertype.component.css'
})
export class UsertypeComponent {
  constructor(private router : Router , private typesharing:TypessharingService){

}

  refirectoParticipantlogin(){
    this.typesharing.settypes("participant")
      this.router.navigate(["/account/login"])
  }
  refirectoOrganizatorlogin(){
    this.typesharing.settypes("organizator")
    this.router.navigate(["/account/login"])
  }
  redirectToRegisterPartcipant(){
    this.typesharing.setRegister("organizator")
    this.router.navigate(["/account/register"])
  }
  redirectToRegisterOrganizator(){
    this.typesharing.setRegister("participant")
    this.router.navigate(["/account/register"])
  }
}
