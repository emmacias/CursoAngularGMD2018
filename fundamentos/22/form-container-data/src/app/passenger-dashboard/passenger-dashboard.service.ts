import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { catchError } from 'rxjs/operators';

import { Passenger } from './models/passenger.interface';


const PASSENGER_API: string = 'http://localhost:3004/passengers';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .pipe(
        catchError((error: any) => Observable.throw(error.json()))
      );     
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.http
      .get(`${PASSENGER_API}/${id}`)
      .pipe(
        catchError((error: any) => Observable.throw(error.json()))
      );    
  }



  updatePassenger(passenger: Passenger): Observable<Passenger> {

    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, httpOptions)
      .pipe(
        catchError((error: any) => Observable.throw(error.json()))
      );    
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .pipe(
        catchError((error: any) => Observable.throw(error.json()))
      );    
  }

}