import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-list-entry',
  templateUrl: './friend-list-entry.component.html',
  styleUrls: ['./friend-list-entry.component.css']
})
export class FriendListEntryComponent implements OnInit {

  friendId : number;
  isPending : boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
