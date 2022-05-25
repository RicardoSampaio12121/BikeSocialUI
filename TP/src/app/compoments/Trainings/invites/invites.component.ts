import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IInvite } from './IInvite';
import { InvitesService } from './invites-service';

@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.css']
})
export class InvitesComponent implements OnInit {

  sub!: Subscription;
  availableTrainings: Array<IInvite>
  invite: IInvite; //para poder chamar os valores para a tabela de html

  constructor(private trainingsService: InvitesService) { }


  ngOnInit(): void {
    this.sub = this.trainingsService.getAvailableTrainingsFunc().subscribe({
      next: availableTrainings => {
        this.availableTrainings = availableTrainings
      }
    })
  }
}
