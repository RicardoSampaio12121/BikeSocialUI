import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAvailableTrainings, IInviteTraining, INeededInfo } from './trainingInvites';
import { TrainingInvitesService } from './trainingInvites-service';

@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.css']
})
export class InvitesComponent implements OnInit {

  sub!: Subscription
  
  trainings: Array<IAvailableTrainings>

  info: INeededInfo = {athleteId: 0, username: "", place: "", contact: 0, clubName: "", clubId: 0}

  toAdd: IInviteTraining = { trainingId: 0, athleteId: 0 }
  

  trainToCheck: number = 0

  constructor(private trainingInvService: TrainingInvitesService) { }

  ngOnInit(): void {
    this.sub = this.trainingInvService.getTrainingsInformation().subscribe({
      next: trainings => {
        this.trainings = trainings
        console.log(this.trainings)
      }
    })

    this.sub = this.trainingInvService.getNeededInfo().subscribe({
      next: neededInfo => {
        this.info = neededInfo
      }
    })
  }

  confirm() {
    this.toAdd.trainingId = this.trainToCheck
    this.toAdd.athleteId = this.info.athleteId 

    this.sub = this.trainingInvService.selfInvite(this.toAdd).subscribe()
  }

  changeCheckBox(trainId: number) {
    // Isto está feito à trolha
    if(trainId == this.trainToCheck) this.trainToCheck = 0
    else this.trainToCheck = trainId
  }

}
