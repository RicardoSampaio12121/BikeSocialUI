import { Component, OnInit } from '@angular/core';
import { CreateService } from './createR.service';
import { CreateRace, CreateRaceA, Federacao, Localidade } from './createRace.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponentR implements OnInit {


  raceTypeString: string = ""
  federacaoString: string = ""

  criarRace: CreateRace = {
    nome: '',
    dataInicio: new Date(),
    distancia: 0,
    tempoPre: 0,
    estado: ''
  };

  createRace: CreateRaceA = { description: "", distance: 0, estimatedTime: 0, dateTime: new Date(), FederationId: 0, RaceTypeId: 0, localidade: "", cidade: "", lugar: "", state: "" }

  local: Localidade = {
    cidade: '',
    localidade: '',
    lugar: ''
  };

  fede: Array<Federacao>
    

  constructor(private CreateService: CreateService) { }

  ngOnInit(): void {
    this.getFederations();
  }


  changeRaceyType() {
    switch (this.raceTypeString) {
      case "Estrada":
        this.createRace.RaceTypeId = 1;
        break;
      case "Monte":
        this.createRace.RaceTypeId = 2;
        break;
      case "Misto":
        this.createRace.RaceTypeId = 3;
        break;
    }
  }

  changeFederation(){
    for(var i in this.fede){
      if(this.fede[i].name == this.federacaoString){
        this.createRace.FederationId = this.fede[i].id
      }
    }
  }


  createRACE(): void {
    // this.CreateService.create(this.criarRace).subscribe((race) => {
    //   this.criarRace = race;
    //   console.log("created: ", this.criarRace);
    //   alert("sucesso ");
    // });

    this.createRace.description = this.criarRace.nome;
    this.createRace.distance = this.criarRace.distancia;
    this.createRace.estimatedTime = this.criarRace.tempoPre;
    this.createRace.dateTime = this.criarRace.dataInicio;
    this.createRace.localidade = this.local.localidade;
    this.createRace.cidade = this.local.cidade;
    this.createRace.lugar = this.local.lugar;
    this.createRace.state = "Open";

    this.CreateService.create(this.createRace).subscribe((race) => {
      console.log("Entrou na func")
    });
  }

  getFederations(){
    this.CreateService.getFederations().subscribe((federations) =>  {
      //this.fede = JSON.parse(federations.json());
      this.fede = federations;
      //let obj: { string: Federacao[] } = JSON.parse(federations.toString())

      for(let l in federations){
       console.log(federations[l].name)
      }


      //console.log(arr[0].name)
      
        
    });
  }

}
