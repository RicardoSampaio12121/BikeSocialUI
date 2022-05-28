import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { IAvailableTrainings, IInviteTraining, INeededInfo } from "./trainingInvites";

@Injectable({
    providedIn: 'root'
})
export class TrainingInvitesService{
    private trainingsEndpoint = "https://localhost:7239/trainings/"

    private getAvailableTrainingsEndpoint = "getAvailableTrainings"
    private selfInviteEndpoint = "selfInvite"

    private usersEndpoint = "https://localhost:7239/users/"
    private getInfo = "GetNeededInfoTrainInvUI"

    constructor(private http: HttpClient) { }

    getTrainingsInformation(): Observable<Array<IAvailableTrainings>>{
        return this.http.get<Array<IAvailableTrainings>>(this.trainingsEndpoint.concat(this.getAvailableTrainingsEndpoint))
            .pipe(
                tap(data => console.log('ALL ', JSON.stringify(data))),
                catchError(this.handleError)
            )
    }

    getNeededInfo(): Observable<INeededInfo>{
        return this.http.get<INeededInfo>(this.usersEndpoint.concat(this.getInfo))
            .pipe(
                tap(data => console.log('ALL ', JSON.stringify(data))),
                catchError(this.handleError)
            )
    }

    selfInvite(data:IInviteTraining) {
        return this.http.post(this.trainingsEndpoint.concat(this.selfInviteEndpoint), data);
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