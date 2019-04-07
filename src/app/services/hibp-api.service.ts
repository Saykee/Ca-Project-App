import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HibpApiService {

  private _siteURL = 'https://haveibeenpwned.com/api/v2/breachedaccount/';
  private _unverifiedBreaches = '?includeUnverified=true';

  pwnedDataCollection: AngularFirestoreCollection<IHibpresponse>;

  pwnedData: Observable<IHibpresponse[]>;

  allPwnedData: IHibpresponse[];

  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    this.pwnedDataCollection = _afs.collection<IHibpresponse>("pwned-Data");
  }

  addPwnedData(pwnedData: IHibpresponse) {
    this.pwnedDataCollection.add(JSON.parse(JSON.stringify(pwnedData)));
  }

  getPwnedData(emailName: string): Observable<IHibpresponse> {
    console.log("URL : "+ this._siteURL+emailName+this._unverifiedBreaches);
    this.pwnedData = this.pwnedDataCollection.valueChanges();
    return this._http.get<IHibpresponse>(this._siteURL+emailName+this._unverifiedBreaches).pipe(
    tap(data => console.log('All : ' + JSON.stringify(data))),
    catchError(this.handleError));
  }

  handleError(err: string) {
    console.log('HibpApiServiceError : ' + JSON.stringify(err));
    return Observable.throw(err);
  }
}

