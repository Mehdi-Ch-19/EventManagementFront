import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(private route : Router , private activeroute : ActivatedRoute){}
  ngOnInit(): void {
    console.log(this.route)
  }
  redirectogategory(){
      this.route.navigate(['category/Music'])
  }
}
