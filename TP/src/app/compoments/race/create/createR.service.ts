import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateRace } from './createRace.model';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  readonly AuthInterceptor: "https://localhost:7239/race"

  constructor(private http: HttpClient) { }

  create(create: CreateRace): Observable<CreateRace> {
    return this.http.post<CreateRace>(this.AuthInterceptor, create)
  } 

  getInspectionList(): Observable<any[]>{
    return this.http.get<any>(this.AuthInterceptor +'/GetRace');
  }

  addRace(data:any) {
    return this.http.post(this.AuthInterceptor + '/create', data);
  }

  /* updateRace(id:number, data:any) {
    return this.http.put(this.AuthInterceptor + '/')
  } */

}