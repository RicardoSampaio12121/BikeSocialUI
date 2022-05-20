import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './compoments/Trainings/create/create.component';
import { FooterComponent } from './compoments/templates/footer/footer.component';
import { NavComponent } from './compoments/templates/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { InvitesComponent } from './compoments/Trainings/invites/invites.component';
import { AccountDefinitionsComponent } from './compoments/conta/account-definitions/account-definitions.component';
import { PrivacyDefinitionsComponent } from './compoments/conta/privacy-definitions/privacy-definitions.component';
import { ProfileComponent } from './views/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    InvitesComponent,
    AccountDefinitionsComponent,
    PrivacyDefinitionsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
