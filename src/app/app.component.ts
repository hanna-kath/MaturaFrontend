import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "./Patient";
import {HumanName} from "./HumanName";
import {Identifier} from "./Identifier";
import {ContactPoint} from "./ContactPoint";
import {Address} from "./address";
import {Observable} from "rxjs";
import { DataService } from './data.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { merge } from 'lodash';
import { Practitioner } from './Practitioner';

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
  public currentPatient?: Patient;
  public practitioners: Practitioner[] = [];
  public currentPractitioner?: Practitioner;
  public adresses: Address[] = [];
  public identifiers: Identifier[] = [];
  public names: HumanName[] = [];
  public telecoms: ContactPoint[] = [];

  //constructor(private http: HttpClient) {}
  constructor(private dataService: DataService) {}


  fetchIpText(){
    this.dataService.getIfConfigMe().subscribe(response => {
      console.log(response);
      this.ipAddress = response;
    });
  }

  fetchIpJson(){
    this.dataService.getAllJson().subscribe(response => {
      console.log(response);
    });
  }


  ngOnInit(): void {
    this.fetchIpText();
    this.fetchIpJson();
    // this.getAllPatients();
    // this.getAllPractitioners();
    //this.getPatients();
  }

  // https://angular.io/guide/http
  
  

}

