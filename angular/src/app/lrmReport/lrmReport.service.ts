import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp, Response } from '@angular/http';
import { ConfigurationService } from '../configuration.service';
import { HannaData } from '../shared/NIIDecomposition';
import {AppSettings} from '../appSettings';
import 'rxjs/add/operator/map';


@Injectable()
export class LrmReportService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private jsonp: Jsonp) {
  }

  getJson(name) {
    return this.http.get('./assets/' + name).toPromise()
      .then((res: any) => {
        return JSON.parse(res._body)
      });
  }

  // https://lt1master.ec2.internal:51150/node/nd_mod/GetCashFlow
  // https://10.62.1.155:51150/node/nd_mod/GetCashFlow?BUS_DATE=2017-01-01&TYPE=REAL
  // getData(date, type) {
  //   return this.jsonp.request(
  //     AppSettings.API_URL + 'node/nd_mod/GetCashFlow?BUS_DATE=' + date + '&TYPE=' + type + '&callback=JSONP_CALLBACK')
  //     .toPromise()
  //     .then((res: any) => {
  //       return res._body.results
  //     });
  // }

  //
  getTestData2(date, type): Observable<any> {
    const apiURL2 = AppSettings.API_URL +
    'node/nd_mod/GetCashFlow?BUS_DATE=' + date + '&TYPE=' + type + '&callback=JSONP_CALLBACK';
    return this.jsonp.request(apiURL2, {
      method: 'Get',
      headers: this.headers
    })
      .map(function (res: any) {
        const hannadata = new HannaData();
        hannadata.parse(res._body);
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
