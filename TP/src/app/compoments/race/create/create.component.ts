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
    dataInicio: new Date(''),
    distancia: 0,
    tempoPre: 0,
    estado: ''
  };

  createRace: CreateRaceA = { 
    description: "", 
    distance: 0, 
    estimatedTime: 0, 
    dateTime: new Date(''), 
    FederationId: 0, 
    RaceTypeId: 0, 
    localidade: "", 
    cidade: "", 
    lugar: "", 
    state: "" 
}

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
    this.createRace.state = this.criarRace.estado;
    

    console.log("--------------------------------------------");

    console.log("-",this.createRace.description);
    console.log("-",this.createRace.distance)
    console.log("-",this.createRace.estimatedTime)
    console.log("-",this.createRace.dateTime)
    console.log("-",this.createRace.localidade);
    console.log("-",this.createRace.cidade)
    console.log("-",this.createRace.lugar)
    console.log("-",this.createRace.state)
    console.log("-",this.createRace.FederationId)
    console.log("-typerace",this.createRace.RaceTypeId)

    let auxDate = new Date('');
    if((this.createRace.description =="" ||  this.createRace.distance == 0) && (this.createRace.estimatedTime == 0
      || this.createRace.dateTime == auxDate)  && (this.createRace.localidade == "" || this.createRace.cidade == "") 
      || (this.createRace.lugar == "" && this.createRace.state == "") && (this.createRace.FederationId == 0 
        || this.createRace.RaceTypeId == 0))
        { 
          console.log("vazio");
          alert("prencher todos os campo");
        }
    else{
    console.log("----");
    console.log("-",this.createRace);
    this.CreateService.create(this.createRace).subscribe((race) => {
      console.log("Entrou na func")
      console.log("-",this.createRace);
      alert("Prova inserida com sucesso!");
    });
    }

    /* this.CreateService.create(this.createRace).subscribe((race) => {
      console.log("Entrou na func")
    }); */
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
