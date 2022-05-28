import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { Profile } from '../views/profile/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileEndpoint : string = "https://localhost:7239/profile";
  constructor(private http: HttpClient) { }

  getProfile(userId : number) : Observable<Profile>
  {
    return this.http.get<Profile>(this.profileEndpoint.concat('/view/' + userId.toString()));
  }
}
