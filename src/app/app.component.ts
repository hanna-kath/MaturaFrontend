import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

// todo implement all your server-side properties of patient
export interface Patient{
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'EmptyProject';
  ipAddress: string = "";

  // todo store patients here
  public patients: Patient[] = [];

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

  ngOnInit(): void {
    this.fetchIpText();
    this.fetchIpJson();
  }

  // todo add http requests
  // https://angular.io/guide/http

  getAllPatients(): void{
    throw new Error("not implemented");
  }

}

