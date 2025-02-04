import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  private apiUrl = 'https://api.example.com/data'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Method to fetch data from API
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  // Method to post data to API
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  // Error handling method
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
