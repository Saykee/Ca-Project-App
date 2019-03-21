import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';

@Injectable({
  providedIn: 'root'
})
export class HibpApiService {

  private _siteURL = 'https://haveibeenpwned.com/api/v2/breachedaccount/';

  constructor(private _http: HttpClient) {
    
  }

  getPwnedData(emailName: string): Observable<IHibpresponse> {
    
    console.log("URL : "+ this._siteURL+emailName);
    return this._http.get<IHibpresponse>(this._siteURL+emailName).pipe(
    tap(data => console.log('All : ' + JSON.stringify(data))),
    catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log('HibpApiService : ' + err.message);
    return Observable.throw(err.message);
  }
}