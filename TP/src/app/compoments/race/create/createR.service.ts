import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateRace, CreateRaceA, Federacao, Localidade } from './createRace.model';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private baseUrl =  "https://localhost:7239/race/"
  private federationDefaultUrl = "https://localhost:7239/federation/"
  private get = "GetRace"
  private getFederationsEndpoint = "Federations"
  private createrace = "create"

  constructor(private http: HttpClient) { }

  create(create: CreateRaceA): Observable<CreateRaceA> {
    return this.http.post<CreateRaceA>(this.baseUrl.concat(this.createrace), create)
  } 

  getFederations(): Observable<Array<Federacao>> {
    return this.http.get<Array<Federacao>>(this.federationDefaultUrl.concat(this.getFederationsEndpoint));
  }

  getInspectionList(id:number): Observable<any[]>{
    return this.http.get<any>(this.baseUrl + `GetRace/${id}`);
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