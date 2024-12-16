import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
linkdinurl = "www.linkedin.com/in/mahdi-chiheb-831697244"
goToLink(url: string) {
  window.open(url, "_blank");
}
}
