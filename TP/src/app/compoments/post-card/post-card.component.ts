import { Component, OnInit, Input } from '@angular/core';
import { Race } from 'src/app/services/race';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() isImagePost?: boolean;
  @Input() race?: Race;
  printRace : Race;

  constructor() { 
   
  }

  ngOnInit(): void {
    
  }

}
