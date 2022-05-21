import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './compoments/Trainings/create/create.component';
import { FooterComponent } from './compoments/templates/footer/footer.component';
import { NavComponent } from './compoments/templates/nav/nav.component';
import { HomeComponent } from './compoments/views/home/home.component';
import { InvitesComponent } from './compoments/Trainings/invites/invites.component';
import { AccountDefinitionsComponent } from './compoments/conta/account-definitions/account-definitions.component';
import { PrivacyDefinitionsComponent } from './compoments/conta/privacy-definitions/privacy-definitions.component';
import { HeaderComponent } from './compoments/header/header.component';
import { SidebarComponent } from './compoments/sidebar/sidebar.component';
import { AuthInterceptorProvider } from './auth.interceptor';

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
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
