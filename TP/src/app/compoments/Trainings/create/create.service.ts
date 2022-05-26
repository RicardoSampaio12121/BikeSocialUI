import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateTrainingA } from './createTraining.model';

@Injectable({
  providedIn: 'root'
})
export class CreateTService {
  private baseTUrl = "https://localhost:7239/trainings/"
  private createtrainingURL = "createPW"
 

  constructor(private http: HttpClient) { }

  create(createT: CreateTrainingA): Observable<CreateTrainingA> {
    return this.http.post<CreateTrainingA>(this.baseTUrl.concat(this.createtrainingURL), createT)
  }


  /* create(create: CreateRaceA): Observable<CreateRaceA> {
    return this.http.post<CreateRaceA>(this.baseUrl.concat(this.createrace), create)
  }  */


}
