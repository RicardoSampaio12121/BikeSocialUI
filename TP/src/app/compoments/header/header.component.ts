import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedUser : User = {} as User;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUser(0).subscribe(currUser => this.loggedUser = currUser);
  }

}
