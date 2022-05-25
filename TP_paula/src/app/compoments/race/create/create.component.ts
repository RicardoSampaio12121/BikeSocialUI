import { Component, OnInit, NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CreateService } from './create.service';
import { CreateRace, Localidade } from './createRace.model';

 @Component({
   selector: 'app-create',
   templateUrl: './create.component.html',
   styleUrls: ['./create.component.css']
 })
export class CreateComponentR implements OnInit {


  criarRace: CreateRace = {nome: "", dataInicio: new Date() , distanca: 0,
      tempoPre: 0,
    federacao: "", 
    estado: ""}

  local: Localidade [] = []; 

  coiso: string = ""

  



  constructor(private CreateService: CreateService,
              private router: AppRoutingModule) { }

  ngOnInit(): void {
  }

}
