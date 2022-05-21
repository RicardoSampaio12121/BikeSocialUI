import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    public readonly API_URI: string = 'https://localhost:7239/';
    public readonly API_SUB_USER_URI: string = 'user';
    public readonly API_GET_PRIVACY_SETTINGS_ENDPOINT: string = 'getPrivacySettings';
} 