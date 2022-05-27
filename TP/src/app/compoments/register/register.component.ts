import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { INewUser } from './newUser';
import { registerService } from './register-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  sub!: Subscription;
  errorMessage: "";

  newUser: INewUser = { username: "", email: "", password: "", birthdate: new Date(), userTypeId: 0, sex: "" }
  day: string = "";
  month: string = "";
  year: string = "";

  userTypeInText: string = "";

  constructor(private service: registerService) { }


  ngOnInit(): void {
  }

  changeUserType() {
    switch (this.userTypeInText) {
      case "Atleta": {
        this.newUser.userTypeId = 1
        break;
      }
      case "Pai": {
        this.newUser.userTypeId = 2
        break;
      }
      case "Diretor": {
        this.newUser.userTypeId = 3
        break;
      }
      case "Treinador": {
        this.newUser.userTypeId = 4
        break;
      }
      case "Funcionário": {
        this.newUser.userTypeId = 5
        break;
      }
    }
  }

  register() {
    // const dateAsString = (this.day + "-" + this.month + "-" + this.year)
    // this.newUser.birthDate = new Date(dateAsString)

    this.newUser.birthdate = new Date()

    console.log("UserType: " + this.newUser.userTypeId)
    console.log(JSON.stringify(this.newUser))

    if (this.day != "" && this.month != "" && this.year != "" && this.newUser.email != "" && this.newUser.password != "" && 
        this.newUser.sex != "" && this.newUser.userTypeId != 0 && this.newUser.username != "")
    {
      this.sub = this.service.registerUser(this.newUser).subscribe({
        next: createdUser => {
          console.log("Coiso coisado")
          alert("Utilizador criado com sucesso!");
        }
      })
    }
    else alert("Campos por preencher");
  }

  teste() {
    console.log(this.newUser)
    console.log(this.day)
    console.log(this.month)
    console.log(this.year)

  }

}
