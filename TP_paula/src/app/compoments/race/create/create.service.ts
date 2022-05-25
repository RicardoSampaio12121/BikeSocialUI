import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  baseUrl: "https://localhost:7239/race/"

  constructor(private http: HttpClient) { }

  
}