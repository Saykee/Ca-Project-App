import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HibpApiService {
  [x: string]: any;

  private _siteURL = 'https://haveibeenpwned.com/api/v2/breachedaccount/';
  private _unverifiedBreaches = '?includeUnverified=true';

  constructor(private _http: HttpClient) {}

  getPwnedData(emailName: string): Observable<IHibpresponse> {
    
    console.log("URL : "+ this._siteURL+emailName+this._unverifiedBreaches);
    return this._http.get<IHibpresponse>(this._siteURL+emailName+this._unverifiedBreaches).pipe(
    tap(data => console.log('All : ' + JSON.stringify(data))),
    catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log('HibpApiService : ' + err.message);
    return Observable.throw(err.message);
  }
}

