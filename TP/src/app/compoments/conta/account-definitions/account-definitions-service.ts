import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { IAccountSettings } from "./accountDefinitions";

@Injectable({
    providedIn: 'root'
})
export class AccountDefinitionsService{
    private accountSettingsEndpoint = "https://localhost:7239/users/"
    private getAccountSettingsEndpoint = "getAccountSettings"

    constructor(private http: HttpClient) {}

    getAccountSettings(): Observable<IAccountSettings> {
        return this.http.get<IAccountSettings>(this.accountSettingsEndpoint.concat(this.getAccountSettingsEndpoint))
            .pipe(
                tap(data => console.log('ALL: ', JSON.stringify(data))),
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