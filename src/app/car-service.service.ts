import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()

export class CarServiceService {

  private baseAPI;

  constructor(
    private http: HttpClient
  ) {
    const {API_HOST, API_BASE_URL, API_PORT} = environment;
    this.baseAPI = `${API_HOST}:${API_PORT}${API_BASE_URL}`;
  }

  public getAllCars() {
    return this.http.get(`${this.baseAPI}` + '/vehicles/');
  }

  public getCarData(car) {
    return this.http.get(`${this.baseAPI}` + '/vehicle/' + car);
  }

}
