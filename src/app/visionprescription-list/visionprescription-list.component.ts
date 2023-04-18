import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visionprescription-list',
  templateUrl: './visionprescription-list.component.html',
  styleUrls: ['./visionprescription-list.component.css']
})
export class VisionprescriptionListComponent implements OnInit{

  public vps: any[] = [];
  currentVp?: any = undefined
  
  constructor(
    private dataService: DataService,
    private router: Router,
    activatedRoute: ActivatedRoute
  ){
    activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id) {
        dataService.getVisionPrescription(id).subscribe(vp => {
          this.currentVp = vp;
        });
      }
    });
  }
  
  createNewVisionPrescription() {
    this.router.navigate(['/visionprescriptions/'])
    this.currentVp = {};
  }
  
  createVisionPrescription(vp: any) {
    this.dataService.postVisionPrescription(vp).subscribe(response => {
      console.log('post', response);
      this.fetchVisions();
      this.currentVp = undefined;
    });
  }
  
  updateVision(vp: any) {
    this.dataService.putVisionPrescription(vp).subscribe(response => {
      console.log('put', response);
      this.fetchVisions();
      this.currentVp = undefined;
    });
  }
  
  deleteVision(vp: any) {
    this.dataService.deleteVisionPrescription(vp).subscribe(response => {
      console.log('Vision deleted', response);
      this.fetchVisions();
      this.currentVp = undefined;
    });
  }
  
  ngOnInit(): void {
    this.fetchVisions();
  }
  
  fetchVisions() {
    this.dataService.getVisionPrescriptions().subscribe(vps => {
      console.log(vps);
      this.vps = vps;
    });
  }

}
