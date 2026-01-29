import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../model/patient';


@Injectable({
  providedIn: 'root',
})
export class PatientsService {

  private readonly API = 'http://localhost:3000/patients';
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Patient[]>(this.API);
  }
}