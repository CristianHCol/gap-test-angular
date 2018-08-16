import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Car } from '../models/car';

@Injectable({ providedIn: 'root' })
export class CarService {
    headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    constructor( private http: HttpClient ) { }

    getAll(): Observable<Car[]> {
      return this.http.get<Car[]>(`${environment.mocks_url}cars`).pipe(
        tap(_ => this.log('get avaliable cars')),
        catchError(this.handleError<Car[]>('error getting list of cars'))
      );
    }

    getDetailById(id: number): Observable<Car> {
      return this.http.get<Car>(`${environment.mocks_url}car_details/${id}`).pipe(
        tap(_ => this.log(`fetched car detail =${id}`)),
        catchError(this.handleError<Car>(`card id=${id}`))
      );
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error); // log to console instead
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }

    private log(message: string) {
      console.log(`carService: ${message}`);
    }
}
