import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiHttpService } from 'src/app/core/services/api-http.service';
import { Constants } from 'src/app/config/constants';
import { PrivacyDefinitionsService } from './privacy-definitions.service';
import { Subscription } from 'rxjs';
import { IPrivacySettings } from './privacySettings';

@Component({
  selector: 'app-privacy-definitions',
  templateUrl: './privacy-definitions.component.html',
  styleUrls: ['./privacy-definitions.component.css']
})
export class PrivacyDefinitionsComponent implements OnInit, OnDestroy {
  @ViewChild('rbPVPublic') PVPublic: HTMLInputElement
  @ViewChild('rbPVFriends') PVFriends: HTMLInputElement
  @ViewChild('rbPVPrivate') PVPrivate: HTMLInputElement

  @ViewChild('rbPcAll') PCAll: HTMLInputElement
  @ViewChild('rbPcFriends') PCFriends: HTMLInputElement
  @ViewChild('rbPcPrivate') PCPrivate: HTMLInputElement

  cbPvPublic: boolean
  cbPvFriends: boolean
  cbPvPrivate: boolean

  cbPcAll: boolean
  cbPcFriends: boolean
  cbPcPrivate: boolean


  sub!: Subscription;
  errorMessage = '';

  settings: IPrivacySettings = { profileVisibility: 0, commentsPermission: 0 , unfriendContactPermission: false, unfriendTrodyVisualization: false, privateRaces: false, privateRoutes: false, privateTrainings: false}

  constructor(private privacySettingsService: PrivacyDefinitionsService) { }

  ngOnInit(): void {
    this.getInitialData()
  }

  changeVisibilitySettings(mode: number, evt: any): void {
    this.settings.profileVisibility = mode;

    if (mode == -1) {
      this.cbPvPublic = false
      this.cbPvFriends = false
      this.cbPvPrivate = true
    }
    else if (mode == 0) {
      this.cbPvPublic = false
      this.cbPvFriends = true
      this.cbPvPrivate = false
    }
    else {
      this.cbPvPublic = true
      this.cbPvFriends = false
      this.cbPvPrivate = false
    }
  }

  changeCommentsPermission(mode: number): void {
    this.settings.commentsPermission = mode

    if (mode == -1) {
      this.cbPcAll = false
      this.cbPcFriends = false
      this.cbPcPrivate = true
    }
    else if (mode == 0) {
      this.cbPcAll = false
      this.cbPcFriends = true
      this.cbPcPrivate = false
    }
    else {
      this.cbPcAll = true
      this.cbPcFriends = false
      this.cbPcPrivate = false
    }
  } 

  unfriendContactChange(){
    this.settings.unfriendContactPermission = !this.settings.unfriendContactPermission
    console.log(this.settings.unfriendContactPermission)
  }

  unfriendTrofyVisualizationChange(){
    this.settings.unfriendTrodyVisualization = !this.settings.unfriendTrodyVisualization
  }

  privateTrainingsChange(){
    this.settings.privateTrainings = !this.settings.privateTrainings
  }

  privateRacesChange(){
    this.settings.privateRaces = !this.settings.privateRaces
  }

  privateRoutesChange(){
    this.settings.privateRoutes = !this.settings.privateRoutes
  }

  updatePrivacySettings(): void {
    console.log(this.settings.commentsPermission)

    this.sub = this.privacySettingsService.updatePrivacySettings(this.settings).subscribe();
    alert("Atualizado com sucesso");
  }

  revertChanges(){
    this.getInitialData()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  getInitialData(){
    this.sub = this.privacySettingsService.getPrivacySettings().subscribe({
      next: privacySettings => {
        this.settings = privacySettings;

        if (this.settings.profileVisibility == -1) {
          this.cbPvPublic = false
          this.cbPvFriends = false
          this.cbPvPrivate = true
        }
        else if (this.settings.profileVisibility == 0) {
          this.cbPvPublic = false
          this.cbPvFriends = true
          this.cbPvPrivate = false
        }
        else {
          this.cbPvPublic = true
          this.cbPvFriends = false
          this.cbPvPrivate = false
        }

        if (this.settings.commentsPermission == -1) {
          this.cbPcAll = false
          this.cbPcFriends = false
          this.cbPcPrivate = true
        }
        else if (this.settings.commentsPermission == 0) {
          this.cbPcAll = false
          this.cbPcFriends = true
          this.cbPcPrivate = false
        }
        else {
          this.cbPcAll = true
          this.cbPcFriends = false
          this.cbPcPrivate = false
        }
      },
      error: err => this.errorMessage = err
    });
  }
  
}
