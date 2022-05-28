import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersEndpoint = "https://localhost:7239/users";
  constructor(private http: HttpClient) { }

  getUser(userId : number) : Observable<User>
  {
    return this.http.get<User>(this.usersEndpoint.concat('/getUser/' + userId.toString()));
  }
}
