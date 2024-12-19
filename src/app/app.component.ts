import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnChanges{
   dashboardIsOn = false
  constructor(private router:Router){

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.router.events.subscribe((d)=>{
      if(d instanceof NavigationEnd){
        if(d.url.includes('dashboard')){
          this.dashboardIsOn = true
        }
      }
    })  }
  ngOnInit(): void {
    this.router.events.subscribe((d)=>{
      if(d instanceof NavigationEnd){
        if(d.url.includes('dashboard')){
          this.dashboardIsOn = true
        }
      }
    })
    }
  title = 'eventfront';

}
