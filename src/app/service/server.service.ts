import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
import { IServer } from '../interface/server';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }
  private serverUrl = 'assets/mock-data/list.json';

  getServers(): Observable<IServer[]>{
    return this.http.get<IServer[]>(this.serverUrl).pipe(
      tap(data => console.log('All: ', JSON.stringify(data)))
    );
  }

}
