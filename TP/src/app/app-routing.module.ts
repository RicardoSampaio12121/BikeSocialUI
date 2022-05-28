import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDefinitionsComponent } from './compoments/conta/account-definitions/account-definitions.component';
import { PrivacyDefinitionsComponent } from './compoments/conta/privacy-definitions/privacy-definitions.component';
import { LoginComponent } from './compoments/login/login.component';
import { CreateComponentR } from './compoments/race/create/create.component';
import { InvitesComponentR } from './compoments/race/invites/invites.component';
import { RegisterComponent } from './compoments/register/register.component';
import { FooterComponent } from './compoments/templates/footer/footer.component';
import { CreateComponent } from './compoments/Trainings/create/create.component';
import { InvitesComponent } from './compoments/Trainings/invites/invites.component';
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';

const routes: Routes = [{
  
    path: "",
    component: LoginComponent
  },
  {
    path: "profile/:userId",
    component: ProfileComponent
  },
  {
    path: "createtraining",
    component: CreateComponent
  },
  {
    path: "inscrevertreino",
    component: InvitesComponent
  },
  {
    path: "createrace",
    component: CreateComponentR
  },
  { path: "inscreverprova",
    component: InvitesComponentR
  },
  { path: "contadefinitions",
    component: AccountDefinitionsComponent
  },
  { path: "privacyDefinitions",
    component: PrivacyDefinitionsComponent
  },
  { path: "register",
    component: RegisterComponent
  },
  { path: "login",
  component: LoginComponent
}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
