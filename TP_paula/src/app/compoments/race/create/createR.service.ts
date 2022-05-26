import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateRace, Localidade } from './createRace.model';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private baseUrl =  "https://localhost:7239/"

  constructor(private http: HttpClient) { }

  create(create: CreateRace): Observable<CreateRace> {
    return this.http.post<CreateRace>(this.baseUrl + 'race/create', create)
  } 

  getInspectionList(id:number): Observable<any[]>{
    return this.http.get<any>(this.baseUrl + `race/GetRace/${id}`);
  }

  addRace(data:any) {
    return this.http.post(this.baseUrl + 'race/create', data);
  }

  createLocalidade(createL: Localidade): Observable<Localidade>{
    return this.http.post<Localidade>(this.baseUrl + `athlete/createPlace`, createL);
  }

  /* updateRace(id:number, data:any) {
    return this.http.put(this.AuthInterceptor + '/')
  } */

}