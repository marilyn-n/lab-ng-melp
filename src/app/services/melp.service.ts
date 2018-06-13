import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MelpService {

  constructor(private _http: Http) { }

  getRestaurants() {
    return this._http.get('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json')
    .map((res: Response) => res.json());
  }
}
