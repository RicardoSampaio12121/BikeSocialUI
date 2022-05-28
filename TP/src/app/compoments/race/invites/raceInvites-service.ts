import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { IAvailableRaces, /*IInviteRace, INeededInfo*/ } from "./raceInvites";

@Injectable({
    providedIn: 'root'
})
export class RaceInvitesService{
    private racesEndpoint = "https://localhost:7239/race/"

    private getAvailableRacesEndpoint = "viewRaces"
    //private selfInviteEndpoint = "selfInvite"

    //private usersEndpoint = "https://localhost:7239/users/"
    //private getInfo = "GetNeededInfoRaceInvUI"

    constructor(private http: HttpClient) { }

    getRacesInformation(): Observable<Array<IAvailableRaces>>{
        return this.http.get<Array<IAvailableRaces>>(this.racesEndpoint.concat(this.getAvailableRacesEndpoint))
            .pipe(
                tap(data => console.log('ALL ', JSON.stringify(data))),
                catchError(this.handleError)
            )
    }
/*
    getNeededInfo(): Observable<INeededInfo>{
        return this.http.get<INeededInfo>(this.usersEndpoint.concat(this.getInfo))
            .pipe(
                tap(data => console.log('ALL ', JSON.stringify(data))),
                catchError(this.handleError)
            )
    }

    selfInvite(data:IInviteRace) {
        return this.http.post(this.racesEndpoint.concat(this.selfInviteEndpoint), data);
    }*/


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