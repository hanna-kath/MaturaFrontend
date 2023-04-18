import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { VisionPrescription } from '../VisionPrescription';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { merge } from 'lodash';


@Component({
  selector: 'app-visionprescription-form',
  templateUrl: './visionprescription-form.component.html',
  styleUrls: ['./visionprescription-form.component.css']
})
export class VisionprescriptionFormComponent implements OnChanges {

  constructor() { }

  @Input()
  public currentVp?: VisionPrescription = undefined;

  @Output()
  vpCreate = new EventEmitter<any>();

  @Output()
  vpUpdate = new EventEmitter<any>();

  @Output()
  vpDelete = new EventEmitter<VisionPrescription>();

  vpForm = new FormGroup({
    status: new FormControl(),
    dateWritten: new FormControl(),
    patient: new FormControl()
  });

  saveVp(){
    if(this.currentVp?.id) { 
      const merged = merge(this.currentVp!, this.vpForm.value) 
      merged.id = this.currentVp.id;
      this.vpUpdate.emit(merged)      
    } else {
        this.vpCreate.emit(this.vpForm.value as any);    
    };  
  }
  
  deleteVp(){
    this.vpDelete.emit(this.currentVp)
  }

  ngOnChanges(): void {
    this.vpForm.reset();

    if(!this.currentVp){
      return;
    }
    this.vpForm.patchValue(this.currentVp);
  }
}
