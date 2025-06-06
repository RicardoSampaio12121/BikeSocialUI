import { Component, Input, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Friend } from './friend';
import { FriendListService } from '../../services/friend.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  friends : Friend[] = [];
  pendingFriends : Friend[] = [];
  @Input() profileViewing : number;

  constructor(private friendService : FriendListService) { }

  ngOnInit(): void {
    let token = localStorage.getItem("token" as string) ?? '';
    let decodedToken = jwtDecode(token);
    this.friendService.getFriendList(this.profileViewing).subscribe(
      friendList => {
        friendList.forEach(friend => {
          if(friend.status)
          {
            this.friends.push(friend);
          }
          else
          {
            this.pendingFriends.push(friend);
          }
        });
      }
    );
  }
}
