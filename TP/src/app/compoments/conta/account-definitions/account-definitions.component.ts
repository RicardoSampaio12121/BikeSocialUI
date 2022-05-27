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
    //console.log("Entrou aqui")

    console.log(this.password)

    if (this.password == "") {
      this.toUpdate.newPassword = "nada"
    }
    else if (this.password != this.confirmPassword) {
      //Mensagem de erro qualquer

      return
    }
    else if (this.newPassword == "") {
      this.toUpdate.newPassword = "nada"
    }
    else if (this.newPassword != this.confirmNewPassword) {
      //Mensagem de erro
      
      return
    }
    else {

      this.toUpdate.currentPassword = this.password
      this.toUpdate.newPassword = this.newPassword
    }

    if (this.account.sex == "other") {
      console.log(this.otherSex)

      if (this.otherSex == "Outro..." || this.otherSex == ""){
        //Mensagem de erro
        return
      }
      this.toUpdate.sex = this.otherSex
    }
    else{
      this.toUpdate.sex = this.account.sex
    }

    //Adicionar um Patter para ver se o email é válido

    this.toUpdate.newEmail = this.account.email

    this.sub = this.accountSettingsService.updateAccountSettings(this.toUpdate).subscribe();


  }



}
