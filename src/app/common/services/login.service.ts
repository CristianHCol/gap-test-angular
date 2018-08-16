import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRS, User} from '../models';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class LoginService {
    headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    constructor( private http: HttpClient) { }

    authenticate(data: User): Observable<UserRS> {
      return this.http.get<UserRS>(`${environment.mocks_url}login/${1}`).pipe(
        tap(_ => this.log(`fetched userLogin username=${data.userName}`)),
        catchError(this.handleError<UserRS>(`username username=${data.userName}`))
      );
    }

    logOut(token: string): any {
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error); // log to console instead
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }

    private log(message: string) {
      console.log(`loginService: ${message}`);
    }
}
