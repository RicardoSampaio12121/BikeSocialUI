import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  private trainingEndpoint = "https://localhost:7239/training";
  constructor(private http: HttpClient) { }

  getTrainings()
  {
    return;
  }
}
