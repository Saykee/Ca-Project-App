import { Component, Pipe, PipeTransform } from '@angular/core';
import { HibpApiService } from '../services/hibp-api.service'

@Component({
  selector: 'app-pwned-data',
  templateUrl: './pwned-data.component.html',
  styleUrls: ['./pwned-data.component.css'],
  providers: [HibpApiService],
})
export class PwnedDataComponent {
  pwnedData: IHibpresponse;
  errorMessage: any;

  constructor(private _hipbService: HibpApiService) { }

  getPwnedData(emailName: string): boolean {
    this._hipbService.getPwnedData(emailName).subscribe(pwnedData => {
      this.pwnedData = pwnedData;
      for (let i in pwnedData) {
        this._hipbService.addPwnedData(pwnedData[i]);
      }
    },
    error => this.errorMessage = <any>Error);
    return false;
  }
}
