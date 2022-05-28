import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { AccountDefinitionsService } from './account-definitions-service';
import { IAccountSettings, IUpdateAccountSettings } from './accountDefinitions';

@Component({
  selector: 'app-account-definitions',
  templateUrl: './account-definitions.component.html',
  styleUrls: ['./account-definitions.component.css']
})
export class AccountDefinitionsComponent implements OnInit {

  sub!: Subscription;
  errorMessage = '';

  account: IAccountSettings = { name: "", email: "", sex: "", password: "" }

  toUpdate: IUpdateAccountSettings = { currentPassword: "", newPassword: "", newEmail: "", sex: "" }

  otherDisabled: boolean
  otherSex: string = ""
  password: string = ""
  confirmPassword: string = ""
  newPassword: string = ""
  confirmNewPassword: string = ""


  constructor(private accountSettingsService: AccountDefinitionsService) { }

  ngOnInit(): void {
    this.sub = this.accountSettingsService.getAccountSettings().subscribe({
      next: accountSettings => {
        this.account = accountSettings;
        if (this.account.sex == "feminino" || this.account.sex == "masculino") this.otherDisabled = true
        else{
          
          this.otherSex = this.account.sex
          this.otherDisabled = false
        }
      }
    })
  }

  changeSex() {
    if (this.account.sex == "other") this.otherDisabled = false
    else {
      this.otherDisabled = true
      this.otherSex = "Outro..."
    }
  }

  updateAccountInformation() {
    if (this.password == "") {
      this.toUpdate.newPassword = "nada"
    }
    else if (this.password != this.confirmPassword) {
      alert("Passwords não coincidem")
      return
    }
    else if (this.newPassword == "") {
      this.toUpdate.newPassword = "nada"
    }
    else if (this.newPassword != this.confirmNewPassword) {
      alert("Passwords não coincidem")
      return
    }
    else {
      this.toUpdate.currentPassword = this.password
      this.toUpdate.newPassword = this.newPassword
    }

    if (this.account.sex == "other") {
      if (this.otherSex == "Outro..." || this.otherSex == ""){
        //Mensagem de erro
        return
      }
      this.toUpdate.sex = this.otherSex
    }
    else{
      this.toUpdate.sex = this.account.sex
    }

    this.toUpdate.newEmail = this.account.email
    
    this.sub = this.accountSettingsService.updateAccountSettings(this.toUpdate).subscribe(
      (response) => {
        alert("Atualizado com sucesso.")
      },
      (error) => {
        alert("Password errada.")
      }
    )
  }

  revertChanges() {
    this.sub = this.accountSettingsService.getAccountSettings().subscribe({
      next: accountSettings => {
        this.account = accountSettings;
        if (this.account.sex == "feminino" || this.account.sex == "masculino") this.otherDisabled = true
        else{
          
          this.otherSex = this.account.sex
          this.otherDisabled = false
        }
      }
    })
  }
}
