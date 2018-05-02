import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ConfigurationService } from '../configuration.service';
import 'rxjs/add/operator/toPromise';
import {AppSettings} from '../appSettings';


@Injectable()
export class TreeService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
  }

  getUser(): Promise<any> {
    return this.http.get(AppSettings.API_URL + "/api/Auth", { withCredentials: true }).toPromise()
      .then(response => response.json() as any);
  }

  getUserSession(): Promise<any> {
    return this.http.get(AppSettings.API_URL + "/api/GetUserSession", { withCredentials: true }).toPromise()
      .then(response => response.json() as any);
  }
}
