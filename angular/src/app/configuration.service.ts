import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppSettings} from './appSettings';

@Injectable()
export class ConfigurationService {
  constructor(private http: Http) { }

  private result: Object;

  getConfiguration(key) {
    return this.http.get('./assets/config.json').toPromise()
      .then((res: any) => {
        this.result = JSON.parse(res._body)
        AppSettings.API_URL = this.result[key];
      return this.result[key];
    });
  }
}