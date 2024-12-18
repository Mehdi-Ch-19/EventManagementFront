import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoryparent',
  templateUrl: './categoryparent.component.html',
  styleUrl: './categoryparent.component.css'
})
export class CategoryparentComponent implements OnInit , OnChanges{
  categoryname : string = ""
  constructor(private activeroute : ActivatedRoute){
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngOnInit(): void {
    
    }

}
