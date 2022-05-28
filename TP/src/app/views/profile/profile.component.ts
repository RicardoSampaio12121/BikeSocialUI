import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isFederationFunc = false;
  isAthlete = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    var userToken : string = localStorage.getItem("token") ?? '';
    var decodedToken : any = jwt_decode(userToken as string);
    //Verificar se user está autenticado
    if(userToken != '')
    {
      //Verificar tipo de user, e alterar o acesso a certos links de acordo.
      if(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] == 'federationFunc')
      {
        this.isFederationFunc = true;
      }
      else if(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] == 'athlete')
      {
        this.isAthlete = true;
      }
    } 
    else
      this.router.navigateByUrl("/login");
  }
}
