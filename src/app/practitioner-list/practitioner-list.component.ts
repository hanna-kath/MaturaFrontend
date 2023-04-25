import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {ActivatedRoute, convertToParamMap, Router} from "@angular/router";
import { Practitioner } from '../model/Practitioner';
 
@Component({
  selector: 'app-practitioner-list',
  templateUrl: './practitioner-list.component.html',
  styleUrls: ['./practitioner-list.component.css']
})
export class PractitionerListComponent implements OnInit {

  public practitioners: Practitioner[] = [];
  currentPractitioner?: Practitioner = undefined
  
  constructor(
    private dataService: DataService,
    private router: Router,
    activatedRoute: ActivatedRoute
  ){
    activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id) {
        dataService.getPractitioner(id).subscribe(practitioner => {
          this.currentPractitioner = practitioner;
        });
      }
    });
  }
  
  createNewPractitioner() {
    this.router.navigate(['/practitioners/'])
    this.currentPractitioner = {};
  }
  
  createPractitioner(pracititioner: Practitioner) {
    this.dataService.postPractitioner(pracititioner).subscribe(response => {
      console.log('post', response);
      this.fetchPractitioners();
      this.currentPractitioner = undefined;
    });
  }
  
  updatePractitioner(pracititioner: Practitioner) {
    this.dataService.putPractitioner(pracititioner).subscribe(response => {
      console.log('put', response);
      this.fetchPractitioners();
      this.currentPractitioner = undefined;
    });
  }
  
  deletePractitioner(pracititioner: Practitioner) {
    this.dataService.deletePractitioner(pracititioner).subscribe(response => {
      console.log('Practitioner deleted', response);
      this.fetchPractitioners();
      this.currentPractitioner = undefined;
    });
  }
  
  ngOnInit(): void {
    this.fetchPractitioners();
  }
  
  fetchPractitioners() {
    this.dataService.getPractitioners().subscribe(practitioners => {
      console.log(practitioners);
      this.practitioners = practitioners;
    });
  }
}
