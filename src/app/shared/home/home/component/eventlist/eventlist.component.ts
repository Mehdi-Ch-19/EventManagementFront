import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { EventService } from '../../../../../core/services/event.service';
import { DatePipe, formatDate } from '@angular/common';
import { EventData } from '../../../../../core/models/EventData';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrl: './eventlist.component.css',

})
export class EventlistComponent implements OnInit {
  Upcomingevents: EventData[] = []
  constructor(private eventService: EventService, @Inject(LOCALE_ID) public locale: string) { }
  ngOnInit(): void {
    this.eventService.getUpcomingEvents().subscribe(results => {
      console.log(results.data)
      for (let e of results.data) {
        let Upcomingevent: EventData = new EventData()
        Upcomingevent = e
        Intl.DateTimeFormat().resolvedOptions().locale = this.locale
        const formatdate = formatDate(Upcomingevent.EventStartTime!, 'yyyy-MM-dd HH:mm', this.locale)
        let formatter = new Intl.DateTimeFormat(this.locale, {
          hour:'numeric',
          minute: "2-digit",
          hour12: true,
          hourCycle:'h23'
        });

        let formattedTime = formatter.format(new Date(formatdate));
        console.log(formattedTime);
        console.log(formatdate)
        console.log(new Date(formatdate).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hourCycle: "h23" }))
        this.Upcomingevents.push(Upcomingevent)
      }
      console.log(results.data)
      this.Upcomingevents = results.data
    })
  }



}
