import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { omitByDeep } from 'lodash-omitdeep';
import { Patient } from '../Patient';
import { merge } from 'lodash';


@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnChanges {

  constructor() { }

  @Input()
  public currentPatient?: Patient = undefined;

  @Output()
  patientCreate = new EventEmitter<Patient>();

  @Output()
  patientUpdate = new EventEmitter<Patient>();

  @Output()
  patientDelete = new EventEmitter<Patient>();

  patientForm = new FormGroup({
    //text: new FormControl(''),
    active: new FormControl(true),
    gender: new FormControl("unknown"),
    birthDate: new FormControl(null as Date | null),
    telecom: new FormArray([
      this.createTelecomGroup()      
    ]),
    deceasedBoolean: new FormControl(false),
    address: new FormArray([
      /*new FormGroup({
        postalcode: new FormControl("1010")
      }),
      new FormGroup({
        postalcode: new FormControl("1010")
      }),
      new FormGroup({
        postalcode: new FormControl("1010")
      })*/
        this.createAddressFormGroup()
    ])
  });

  createAddressFormGroup() {
    return new FormGroup({
      city: new FormControl(""),
      postalcode: new FormControl("1010")
    })
  } 

  private createTelecomGroup(): FormGroup<{ value: FormControl<string | null>; }> {
    return new FormGroup({
      value: new FormControl("")
    });
  }

  addNewAddress() {
    this.patientForm.controls.address.push( // push hängt am array einen eintrag an
      this.createAddressFormGroup() // methode um kopierten code zu vermeiden
    )
  }

  removeAddress(index:number) {
    this.patientForm.controls.address.removeAt(index)
  }

  addNewTelecom() {
    this.patientForm.controls.telecom.push(
      this.createTelecomGroup()
    )
  }

  savePatient(){
    if(this.currentPatient?.id) { 
      const merged = merge(this.currentPatient!, this.patientForm.value) 
      merged.id = this.currentPatient.id;
      this.patientUpdate.emit(merged)      
    } else {
        this.patientCreate.emit(this.patientForm.value as any);    
    };  
  }

  
  deletePatient(){
    this.patientDelete.emit(this.currentPatient)
  }

  ngOnChanges(): void {

    this.patientForm.reset();

    if(!this.currentPatient){
      return;
    }


    // array muss gleiche länge haben wie datensatz vom server
    this.patientForm.controls.address.clear();
    while (
      this.patientForm.controls.address.length <
      (this.currentPatient.address?.length ?? 0)
    ) {
      this.addNewAddress();
    }

    // array muss gleiche länge haben wie datensatz vom server
    this.patientForm.controls.telecom.clear();
    while (
      this.patientForm.controls.telecom.length <
      (this.currentPatient.telecom?.length ?? 0)
    ) {
      this.addNewTelecom();
    }

    this.patientForm.patchValue(this.currentPatient);
  }
}
