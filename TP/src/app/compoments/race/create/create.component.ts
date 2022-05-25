import { Component, OnInit } from '@angular/core';
import { CreateService } from './createR.service';
import { CreateRace, Localidade } from './createRace.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponentR implements OnInit {


  criarRace: CreateRace = {
          nome: " ", 
          dataInicio: new Date() , 
          distancia: 0,
          tempoPre: 0,
          federacao: " ", 
          estado: ""
  };

  local: Localidade ={
        cidade: "",
        localidade: "",
        lugar: ""
  };


  

  constructor(private CreateService: CreateService) { }

  ngOnInit(): void {
  }


  createRACE(): void{
    this.CreateService.create(this.criarRace).subscribe((race) => {
      this.criarRace = race;
      console.log("created: ", this.criarRace);
      alert("sucesso ");
    });
  } 

}
