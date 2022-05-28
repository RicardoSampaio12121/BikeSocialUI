import { Component, Inject, Input, OnInit } from '@angular/core';
import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user.service';
import { Friend } from '../friend-list/friend';

@Component({
  selector: 'app-friend-list-entry',
  templateUrl: './friend-list-entry.component.html',
  styleUrls: ['./friend-list-entry.component.css']
})
export class FriendListEntryComponent implements OnInit {

  @Input() friend? : Friend;
  @Input() profileViewing : number;
  friendInfo : User = {} as User;
  isPending : boolean;

  constructor(private userService : UserService) {
    
  }

  ngOnInit(): void {
    if(this.friend?.solicitorId == this.profileViewing)
    {
      this.userService.getUser(this.friend?.receiptientId as number).subscribe(
        friendObtained =>
        {
          console.log(friendObtained);
          this.friendInfo = friendObtained;
        }
      )
    }
    else if(this.friend?.receiptientId == this.profileViewing)
    {
      this.userService.getUser(this.friend.solicitorId).subscribe(
        friendObtained=>
        {
          console.log(friendObtained);
          this.friendInfo = friendObtained;
        }
      )
    }
  }

}
