import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Participant } from '../../../../../core/models/Participant';
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ParticipantService } from '../../../../../core/services/participant.service';
import Swal from 'sweetalert2';
import { ParticipantDto } from '../../../../../core/models/PartticipantDto';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit ,OnChanges {
  @Input() particicpantInfo: ParticipantDto = {}
  @Output() onParticipantUpdate:EventEmitter<ParticipantDto> = new EventEmitter()
  participantForm!:FormGroup

  constructor(private participantService:ParticipantService , private fb : FormBuilder){

  }
  ngOnChanges(changes: SimpleChanges): void {
  
    this.participantForm = this.fb.group({
      name:[this.particicpantInfo?.name],
      email : [this.particicpantInfo?.email],
      adresse:[this.particicpantInfo?.addrese]
    })
  }
  ngOnInit(): void {
     
  }

  onFormSubmit(form:FormGroup){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let p :ParticipantDto= {
          name:this.participantForm.value?.name,
          addrese:this.participantForm.value?.adresee,
          email:this.participantForm.value?.email,
        }
        this.onParticipantUpdate.emit(p)
    
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
        
      }
  }


