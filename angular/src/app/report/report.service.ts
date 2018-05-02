import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ConfigurationService } from '../configuration.service';
import 'rxjs/add/operator/toPromise';
import {AppSettings} from '../appSettings';


@Injectable()
export class ReportService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
  }
  
  getJson(name) {
    return this.http.get('./assets/' + name).toPromise()
      .then((res: any) => {
        return JSON.parse(res._body)
      });
  }
}
