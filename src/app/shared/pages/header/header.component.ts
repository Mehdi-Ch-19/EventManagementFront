import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(private route : Router){}
  ngOnInit(): void {
  }
  redirectogategory(){
      this.route.navigate(['category/Music'])
  }
}
