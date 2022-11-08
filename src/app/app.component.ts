import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "./Patient";
import {HumanName} from "./HumanName";
import {Identifier} from "./Identifier";
import {ContactPoint} from "./ContactPoint";
import {Address} from "./address";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'EmptyProject';
  ipAddress: string = "";
  //name: string = "Hi";

  // todo store patients here
  public patients: Patient[] = [];
  public currentPatient: Patient = {id: "", name: [], active: true, address: [], birthDate: new Date(1000, 1, 1), gender: "male", deceasedBoolean: false, identifier: [], resourceType: "", telecom:[]};
  public adresses: Address[] = [];
  public identifiers: Identifier[] = [];
  public names: HumanName[] = [];
  public telecoms: ContactPoint[] = [];

  constructor(private http: HttpClient) {}

  fetchIpText(){
    this.http.get("http://ifconfig.me",{responseType: "text"}).subscribe(response => {
      console.log(response);
      this.ipAddress = response;
    });
  }

  fetchIpJson(){
    this.http.get("http://ifconfig.me/all.json",{responseType: "json"}).subscribe(response => {
      console.log(response);
    });
  }

  getAllPatients(){
    this.http.get<Patient[]>("http://localhost:8080/api/patient", {responseType: "json"}).subscribe((data =>{
        console.log(data);
        this.patients = data;
      }
    ));
  }

  ngOnInit(): void {
    this.fetchIpText();
    this.fetchIpJson();
    this.getAllPatients();
    //this.getPatients();
  }

  // https://angular.io/guide/http

  public onSubmitButtonClicked(): void{
    this.http.post("http://localhost:8080/api/patient/", {
      firstName:"",
      lastName:"" ,
      //this.http = new HttpClient( '');
    })
  }

  // public stringifyPatient(): any {
  //   return JSON.stringify(this.currentPatient);
  //
  // }
  //
  // public currentPatientAddName(): void {
  //   this.currentPatient.name?.push({text: ""})
  // }
  //
  // public savePatient(patient: Patient): Observable<Patient> {
  //   //this.dataService-savePatient(this.currentPatient);
  //   return this.http.post<Patient>("https://localhost/api/patient/", JSON.stringify(patient))
  // }

  // savePatient(patient: Patient): : Observable<any>{
  //  return this.http.post<Patient>("https://localhost/api/patient/", JSON.stringify(patient))
  // }
  //
  // savePatient(patient: Patient): void {
  //   this.dataService.savePatient(this.currentPatient).subscribe(value: Patient) => {
  //     console.log(value);
  //   }
  // }

}

