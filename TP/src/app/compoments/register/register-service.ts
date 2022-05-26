import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { INewUser } from "./newUser";

@Injectable({
    providedIn: 'root'
})
export class registerService{
    private registerEndpoint = "https://localhost:7239/users/"
    private createUserEndpoint = "register"

    constructor(private http: HttpClient) {}

    registerUser(newUser: INewUser){
        return this.http.post<INewUser>(this.registerEndpoint.concat(this.createUserEndpoint), newUser)
            .pipe(
                tap(() => console.log("Created User: " + newUser.email)),
                map(() => newUser),
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