import { Component, OnInit } from '@angular/core';
import { Medication } from '../model/Medication';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.css']
})
export class MedicationListComponent implements OnInit {
  public medications: Medication[] = [];
  currentMedication?: Medication = undefined
  
  constructor(
    private dataService: DataService,
    private router: Router,
    activatedRoute: ActivatedRoute
  ){
    activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id) {
        dataService.getPatient(id).subscribe(patient => {
          this.currentMedication = patient;
        });
      }
    });
  }

  createNewMedication() {
    this.router.navigate(['/medications/'])
    this.currentMedication = {};
  }

  createMedication(medication: Medication) {
    this.dataService.postMedication(medication).subscribe(response => {
      console.log('post', response);
      this.fetchMedications();
      this.currentMedication = undefined;
    });
  }

  updateMedication(medication: Medication) {
    this.dataService.putMedication(medication).subscribe(response => {
      console.log('put', response);
      this.fetchMedications();
      this.currentMedication = undefined;
    });
  }

  deleteMedication(medication: Medication) {
    this.dataService.deleteMedication(medication).subscribe(response => {
      console.log('Medication deleted', response);
      this.fetchMedications();
      this.currentMedication = undefined;
    });
  }

  ngOnInit(): void {
    this.fetchMedications();
  }

  fetchMedications() {
    this.dataService.getMedications().subscribe(medications => {
      console.log(medications);
      this.medications = medications;
    });
  }

}
