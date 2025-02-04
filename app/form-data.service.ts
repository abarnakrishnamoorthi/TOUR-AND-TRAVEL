import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators'; // Import map and switchMap operators

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private jsonUrl = 'assets/sample.json';

  constructor(private http: HttpClient) {}

  submitFormData(formData: any): Observable<any> {
    // Assuming your JSON file is hosted locally
    return this.http.get<any[]>(this.jsonUrl).pipe( // Specify the type of data returned by the GET request
      map((data: any[]) => {
        data.push(formData); // Add new form data to the existing array
        return data;
      }),
      switchMap((updatedData: any) => this.http.post(this.jsonUrl, updatedData))
    );
  }
}
