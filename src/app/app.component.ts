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

  constructor(private _hipbService: HibpApiService) {
  
  }

  getPwnedData(emailName: string): boolean {
    this._hipbService.getPwnedData(emailName).subscribe(pwnedData => {
      this.pwnedData = pwnedData;
    },
    error => this.errorMessage = <any>error);
    return false;
  }

}
