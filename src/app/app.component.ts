import { Component } from '@angular/core';
import { HibpApiService } from './services/hibp-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HibpApiService],
})
export class AppComponent {
  title = 'CA-Project-App';
  pwnedData: IHibpresponse;
  errorMessage: any;

  constructor() {
  
  }

}
