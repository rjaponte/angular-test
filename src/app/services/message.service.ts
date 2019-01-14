import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { LastMessage } from '../last-message';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messagesUrl = '/api/messages';

  constructor(private http: HttpClient) { }

  getMessages(): Observable<LastMessage[]|null> {
    return this.http.get<LastMessage[]>(this.messagesUrl)
      .pipe(
        catchError(this.handleError('getMessages', []))
      );
  }

  addHero (message: LastMessage) {
    return this.http.post<LastMessage>(this.messagesUrl, message, httpOptions).pipe(
      catchError(this.handleError<LastMessage>('addMessage'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
