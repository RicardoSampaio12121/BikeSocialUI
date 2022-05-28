import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Friend} from '../compoments/friend-list/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendListService {

  private friendsEndpoint = 'https://localhost:7239/friends';

  constructor(private http: HttpClient) {}

  _getToken() : string
  {
    let token = localStorage.getItem('token') ?? '';
    return token;
  }

  getFriendList(userId : number) : Observable<Friend[]>
  {
    let token = this._getToken();
    return this.http.get<Friend[]>(this.friendsEndpoint.concat("/view/" + userId.toString()));
  }

  addFriend() : boolean
  {
    return false;
  }

  acceptFriend() : boolean
  {
    return false;
  }

  rejectFriend() : boolean
  {
    return false;
  }
}
