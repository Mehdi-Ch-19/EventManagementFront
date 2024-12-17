import { Component, Input } from '@angular/core';
import { EventData } from '../../../../../core/models/EventData';

@Component({
  selector: 'app-singlevent',
  templateUrl: './singlevent.component.html',
  styleUrl: './singlevent.component.css'
})
export class SingleventComponent {

  @Input()event :EventData = {}

}
