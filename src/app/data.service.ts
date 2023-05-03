import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './model/Patient';
import { Practitioner } from './model/Practitioner';
import { Medication } from './model/Medication';
import { ImplementationGuide } from './model/ImplementationGuide';

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

  // Patient
  getPatients() {
    return this.http.get<Patient[]>("http://localhost:8080/api/patient/", { responseType: "json" });
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


  // Practitioner
  getPractitioners() {
    return this.http.get<Practitioner[]>("http://localhost:8080/api/practitioner/", { responseType: "json" });
  }

  getPractitioner(id: string) {
    return this.http.get<Practitioner>('http://localhost:8080/api/practitioner/' + id, {
      responseType: 'json',
    });
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

  // Medication
  getMedications() {
    return this.http.get<Medication[]>("http://localhost:8080/api/medication/", { responseType: "json" });
  }

  getMedication(id: string) {
    return this.http.get<Medication>('http://localhost:8080/api/medication/' + id, {
      responseType: 'json',
    });
  }

  postMedication(data: Medication){
    return this.http.post<Medication>('http://localhost:8080/api/medication/', data, {responseType: "json"});
  }

  deleteMedication(data: any){
    return this.http.delete('http://localhost:8080/api/medication/' + data.id);
  }

  putMedication(data: any){
    return this.http.put<Medication>('http://localhost:8080/api/medication/'+ data.id,
    data, 
    {
      responseType: "json"
    }
    );
  }

  // ImplementationGuide
  getImplementationGuides() {
    return this.http.get<ImplementationGuide[]>("http://localhost:8080/api/implementationguide/", { responseType: "json" });
  }

  getImplementationGuide(id: string) {
    return this.http.get<ImplementationGuide>('http://localhost:8080/api/implementationguide/' + id, {
      responseType: 'json',
    });
  }

  postImplementationGuide(data: ImplementationGuide){
    return this.http.post<ImplementationGuide>('http://localhost:8080/api/implementationguide/', data, {responseType: "json"});
  }

  deleteImplementationGuide(data: any){
    return this.http.delete('http://localhost:8080/api/implementationguide/' + data.id);
  }

  putImplementationGuide(data: any){
    return this.http.put<ImplementationGuide>('http://localhost:8080/api/implementationguide/'+ data.id,
    data, 
    {
      responseType: "json"
    }
    );
  }
}
