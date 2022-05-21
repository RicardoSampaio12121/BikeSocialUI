import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { IPrivacySettings } from "./privacySettings";

@Injectable({
    providedIn: 'root'
})
export class PrivacyDefinitionsService {
    private privacySettingsEndpoint = "https://localhost:7239/users/"
    private getPrivacySettingsEndpoint = "getPrivacySettings"
    private updatePrivacySettingsEndpoint = "updatePrivacySettings"

    constructor(private http: HttpClient) { }

    getPrivacySettings(): Observable<IPrivacySettings> {
        return this.http.get<IPrivacySettings>(this.privacySettingsEndpoint.concat(this.getPrivacySettingsEndpoint))
            .pipe(
                tap(data => console.log('ALL: ', JSON.stringify(data))),
                catchError(this.handleError)
            );
    }


    updatePrivacySettings(settings: IPrivacySettings): Observable<IPrivacySettings> {
        return this.http.put<IPrivacySettings>(this.privacySettingsEndpoint.concat(this.updatePrivacySettingsEndpoint), settings)
            .pipe(
                tap(() => console.log('Update Privacy Settings: ' + settings.profileVisibility)),
                map(() => settings),
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
