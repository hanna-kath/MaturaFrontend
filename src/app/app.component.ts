import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

// todo implement all your server-side properties of patient
export class Patient{
  constructor(
    public id: string = '',
    public resourceType: string = 'Patient',
    public identifier?: Array<Identifier>,
    //public name?: Array<HumanName>,
    public name?: HumanName[],
    public telecom?: Array<ContactPoint>,
    public active: boolean = false,
    public gender: string = 'unknown',
    public birthDate: Date = new Date(1000, 1, 1),
    public deceasedBoolean?: boolean,
    public address?: Array<Address>
  ) {}
}

export class HumanName {
  constructor(
    public id: string = '',
    public use: string = '',
    public text: string = '',
    public family: string = '',
    public given: string = '',
    public prefix: string = '',
    public suffix: string = ''
  ) {}
}

export class Identifier {
  constructor(
    public value: string = ''
    //public use: string = '',
    //public system: string = ''
  ) {}
}

export class ContactPoint {
  constructor(
    public value: string = '',
    public text: string = ''
  ) {}
}

export class Address{
  constructor(
    public use: string = '',
    public type: string = '',
    public text: string = '',
    public city: string = '',
    public district: string = '',
    public state: string = '',
    public postalcode: string = '',
    public country: string = '',
    public line: Array<String>
  ) {}
}

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

  // public onSubmitButtonClicked(): void{
  //   this.http.post("http://localhost:8080/api/patient/", {
  //     firstName:"",
  //     lastName:"" ,
  //     //this.http = new HttpClient( '');
  //   })
  // }

}

