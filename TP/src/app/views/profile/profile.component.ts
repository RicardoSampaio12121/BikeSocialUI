import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    var userToken : string = localStorage.getItem("token") ?? '';

    //Verificar se user está autenticado
    if(userToken != '')
      var decodedToken = jwt_decode(userToken as string);
    else
      this.router.navigateByUrl("/login");

    //Verificar tipo de user, e alterar o acesso a certos links de acordo.
  }
}
