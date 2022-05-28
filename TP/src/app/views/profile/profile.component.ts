import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { ProfileService } from 'src/app/services/profile.service';
import { Race } from 'src/app/services/race';
import { RaceService } from 'src/app/services/race.service';
import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user.service';
import { Profile } from './profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isFederationFunc = false;
  isAthlete = false;
  profileUser : User = {} as User;
  profileInfo : Profile = {} as Profile;
  raceList : Race[];
  profileRoute: number;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private profileService: ProfileService, private raceService: RaceService) { 
    const routeParams = this.route.snapshot.paramMap;
    this.profileRoute = Number(routeParams.get('userId'));
    var userToken : string = localStorage.getItem("token") ?? '';
    var decodedToken : any = jwt_decode(userToken as string);
    //Verificar se user está autenticado
    if(userToken != '')
    {
      this.userService.getUser(this.profileRoute).subscribe( userObtained => {
        this.profileUser = userObtained;

        this.profileService.getProfile(this.profileUser.id).subscribe(profileObtained =>
          {
            this.profileInfo = profileObtained;
          });
      });

      this.raceService.getRaces().subscribe(racesObtained => {
        console.log(racesObtained);
        this.raceList = racesObtained;
        console.log(this.raceList)
      })
      
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

  ngOnInit(): void {

  }
}
