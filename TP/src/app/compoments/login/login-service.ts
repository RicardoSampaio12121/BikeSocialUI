import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { login } from "./login";
import { returnedLogin } from "./returnedLogin";

@Injectable({
    providedIn: 'root'
})
export class loginService{
    private usersEndpoint = "https://localhost:7239/users/"
    private loginEndpoint = "login"

    constructor(private http: HttpClient) { }

    login(newLogin: login): Observable<returnedLogin>{
        return this.http.post<returnedLogin>(this.usersEndpoint.concat(this.loginEndpoint), newLogin)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}