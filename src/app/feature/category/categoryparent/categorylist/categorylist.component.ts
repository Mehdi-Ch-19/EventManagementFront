import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../../core/services/event.service';
import { EventData } from '../../../../core/models/EventData';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.css'
})
export class CategorylistComponent implements OnInit,OnChanges, OnDestroy{
  categoryname : string = ""
  events:EventData[] = []
  constructor(private activeroute : ActivatedRoute , private eventservice : EventService){

  }
  ngOnDestroy(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
   this.events = []
  }
  ngOnInit(): void {
    this.activeroute.params.subscribe(p=>{
      this.categoryname = p['name']
      this.events = []
      console.log(p)
      this.eventservice.getEventsByCategory(p['name']).subscribe(responce=>{
        for (let e of responce.data) {
          let eventbycat: EventData = new EventData()
          eventbycat = e
          this.events.push(eventbycat)
        }
      })
    })
    
  }
}
