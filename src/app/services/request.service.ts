import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getSensorData = function() {
     return this.http
        .get('https://mywatersense.herokuapp.com/api/data/sensor/5d780f155d57940017af690c')
        .pipe(
          catchError(error => {
            console.error("Error Location");
            return throwError("Error thrown from catchError");
          })
        );
  }
}
