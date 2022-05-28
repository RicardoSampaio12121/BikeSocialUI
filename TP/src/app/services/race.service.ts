import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Race } from './race';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private raceEndpoint = "https://localhost:7239/race";

  constructor(private http : HttpClient) { 
  }

  getRaces() : Observable<Race[]>
  {
    return this.http.get<Race[]>(this.raceEndpoint.concat("/getRaces"));
  }
}
