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

  raceToCheck: String = ""

  constructor(private raceInvService: RaceInvitesService) { }

  ngOnInit(): void {
    this.sub = this.raceInvService.getRacesInformation().subscribe({
      next: races => {
        this.races = races
        console.log(this.races)
      }
    })
  }

  changeCheckBox(raceDesc: String) {
    // Isto está feito à trolha
    if(raceDesc == this.raceToCheck) this.raceToCheck = ""
    else this.raceToCheck = raceDesc
  }

}
