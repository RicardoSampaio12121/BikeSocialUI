import { Component, OnInit } from '@angular/core';
import { CreateTService } from './create.service';
import { CreateTrainingA, Localidade } from './createTraining.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  trainingTypeString: string = ""

  createTraining: CreateTrainingA = {
    name: "",
    dateTime: new Date,
    estimatedTime: 0,
    cidade: "",
    localidade: "",
    lugar: "",
    trainingTypeId: 0,
    distance: 0
  }

  local: Localidade = {
    cidade: '',
    localidade: '',
    lugar: ''
  };

  constructor(private CreateService2: CreateTService) { }

  ngOnInit(): void {
  }


  changeTrainingType(){
    switch (this.trainingTypeString){
      case "Subidas":
        this.createTraining.trainingTypeId = 1;
        break;
      case "Descanso ativo":
        this.createTraining.trainingTypeId = 1;
        break;
      case "Sprints":
        this.createTraining.trainingTypeId = 1;
        break;
      case "Intervalado":
        this.createTraining.trainingTypeId = 1;
        break;
      case "Endurance":
        this.createTraining.trainingTypeId = 1;
        break;
      case "Rotação":
        this.createTraining.trainingTypeId = 1;
        break;

    }
  }



  createTRAINING(): void{
    this.createTraining.localidade = this.local.localidade;
    this.createTraining.cidade = this.local.cidade;
    this.createTraining.lugar = this.local.lugar;



    let auxDate = new Date('');

    if(this.createTraining.name == "" ||
      this.createTraining.dateTime == new Date ||
      this.createTraining.estimatedTime == 0 ||
      this.createTraining.cidade == "" ||
      this.createTraining.localidade == "" ||
      this.createTraining.lugar == "" ||
      this.createTraining.trainingTypeId == 0 ||
      this.createTraining.distance == 0)
      {
        console.log("vazio");
          alert("Prencher todos os campos");
      }
      else{
        this.CreateService2.create(this.createTraining).subscribe((training) =>{
          console.log("training")
          alert("Treino inserido com sucesso");
        });

      }



   /*  this.CreateService2.create(this.createTraining).subscribe((training) =>{
      console.log("training")
      alert("Inserido com sucesso");
    }); */
  }

}

