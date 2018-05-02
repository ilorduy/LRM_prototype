import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp, Response } from '@angular/http';
import { ConfigurationService } from '../configuration.service';
import { AppSettings } from '../appSettings';
import 'rxjs/add/operator/map';


@Injectable()
export class GlobeReportService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private jsonp: Jsonp) {
  }

  getJson(name) {
    return this.http.get('./assets/' + name).toPromise()
      .then((res: any) => {
        return JSON.parse(res._body)
      });
  }

  getTestData2(date, type): Observable<any> {
    const apiURL2 = AppSettings.API_URL +
      'node/nd_mod/GetCashFlow?BUS_DATE=' + date + '&TYPE=' + type + '&callback=JSONP_CALLBACK';
    return this.jsonp.request(apiURL2, {
      method: 'Get',
      headers: this.headers
    })
      .map(function (res: any) {
        return res || {};
      });
  }

  getData() {
    return this.http.get('./assets/Forms/hannaApi.json').toPromise()
      .then((res: any) => {
        return JSON.parse(res._body)
      });
  }
}
