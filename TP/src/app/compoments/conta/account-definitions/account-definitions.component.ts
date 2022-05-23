import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { AccountDefinitionsService } from './account-definitions-service';
import { IAccountSettings } from './accountDefinitions';

@Component({
  selector: 'app-account-definitions',
  templateUrl: './account-definitions.component.html',
  styleUrls: ['./account-definitions.component.css']
})
export class AccountDefinitionsComponent implements OnInit {

  sub!: Subscription;
  errorMessage = '';

  account: IAccountSettings = {name: "", email: "", sex: ""}

  constructor(private accountSettingsService: AccountDefinitionsService) { }

  ngOnInit(): void {
     this.sub = this.accountSettingsService.getAccountSettings().subscribe({
       next: accountSettings => {
         this.account = accountSettings;
       }
     })
  }

}
