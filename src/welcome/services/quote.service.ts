import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private apiUrl = 'https://api.quotable.io/random';  // Public API endpoint

  constructor(private http: HttpClient) {}

  getRandomQuote(): Observable<string> {
    return this.http.get<{ content: string }>(this.apiUrl).pipe(
      map((response) => response.content),
      catchError(() => of('Could not fetch a quote, try again later.')) // Return a default message if the request fails
    );
  }
}
