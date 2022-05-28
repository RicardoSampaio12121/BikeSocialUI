import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAvailableRaces } from './raceInvites';
import { RaceInvitesService } from './raceInvites-service';

@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.css']
})
export class InvitesComponentR implements OnInit {

  sub!: Subscription

  races: Array<IAvailableRaces>

  constructor(private raceInvService: RaceInvitesService) { }

  ngOnInit(): void {
    this.sub = this.raceInvService.getRacesInformation().subscribe({
      next: races => {
        this.races = races
        console.log("abc",this.races)
      }
    })
  }

}
