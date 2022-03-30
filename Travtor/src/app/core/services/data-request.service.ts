import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {

  constructor(private http: HttpClient) { }

  postRequest = (payload: any, url: string): Observable<any> => {
    return this.http.post(url, payload).pipe(take(1));
  }
  getRequest = (url: string): Observable<any> => {
    return this.http.get(url).pipe(take(1));
  }
}
