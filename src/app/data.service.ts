import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './Patient';
import { Practitioner } from './Practitioner';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getIfConfigMe() {
    return this.http.get("http://ifconfig.me", { responseType: "text" });
  }

  getAllJson() {
    return this.http.get("http://ifconfig.me/all.json", { responseType: "json" });
  }

  getPatients() {
    return this.http.get<Patient[]>("http://localhost:8080/api/patient/", { responseType: "json" });
  }

  getPractitioners() {
    return this.http.get<Practitioner[]>("http://localhost:8080/api/practitioner/", { responseType: "json" });
  }

  getPractitioner(id: string) {
    return this.http.get<Practitioner>('http://localhost:8080/api/practitioner/' + id, {
      responseType: 'json',
    });
  }

  getPatient(id: string) {
    return this.http.get<Patient>('http://localhost:8080/api/patient/' + id, {
      responseType: 'json',
    });
  }
  
  postPatient(data: Patient){
    return this.http.post<Patient>('http://localhost:8080/api/patient/', data, {responseType: "json"});
  }

  deletePatient(data: any){
    return this.http.delete('http://localhost:8080/api/patient/' + data.id);
  }

  putPatient(data: any){
    return this.http.put<Patient>('http://localhost:8080/api/patient/' + data.id,
    data, 
    {
      responseType: "json"
    }
    );
  }

  postPractitioner(data: Practitioner){
    return this.http.post<Practitioner>('http://localhost:8080/api/practitioner/', data, {responseType: "json"});
  }

  deletePractitioner(data: any){
    return this.http.delete('http://localhost:8080/api/practitioner/' + data.id);
  }

  putPractitioner(data: any){
    return this.http.put<Practitioner>('http://localhost:8080/api/practitioner/' + data.id,
    data, 
    {
      responseType: "json"
    }
    );
  }

  getVisionPrescriptions() {
    return this.http.get<any[]>("http://localhost:8080/api/visionprescription/", { responseType: "json" });
  }

  getVisionPrescription(id: string) {
    return this.http.get<any>('http://localhost:8080/api/visionprescription/' + id, {
      responseType: 'json',
    });
  }

  postVisionPrescription(data: any){
    return this.http.post<any>('http://localhost:8080/api/visionprescription/', data, {responseType: "json"});
  }

  deleteVisionPrescription(data: any){
    return this.http.delete('http://localhost:8080/api/visionprescription/' + data.id);
  }

  putVisionPrescription(data: any){
    return this.http.put<any>('http://localhost:8080/api/visionprescription/' + data.id,
    data, 
    {
      responseType: "json"
    }
    );
  }
}
