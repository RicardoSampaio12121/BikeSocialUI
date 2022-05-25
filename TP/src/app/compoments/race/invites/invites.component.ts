import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InvitesRacesService } from './invites-race-service';
import { IRaces } from './IRaces';

@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.css']
})
export class InvitesComponentR implements OnInit {

  sub!: Subscription;
  availableRaces: Array<IRaces>,
  races: IRaces;

  constructor(private racesService: InvitesRacesService) { }

  ngOnInit(): void {
    this.sub = this.racesService.getAvailableRacesFunc().subscribe({
      next: this.availableRaces => {
        this.availableRaces = this.availableRaces
      }
    })
  }
}
