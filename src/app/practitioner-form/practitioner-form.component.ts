import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Patient } from '../Patient';
import { ActivatedRoute, Router } from '@angular/router';
import { Practitioner } from '../Practitioner';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { merge } from 'lodash';

@Component({
  selector: 'app-practitioner-form',
  templateUrl: './practitioner-form.component.html',
  styleUrls: ['./practitioner-form.component.css']
})
export class PractitionerFormComponent implements OnChanges {

  constructor() { }

  @Input()
  public currentPractitioner?: Practitioner = undefined;

  @Output()
  practitionerCreate = new EventEmitter<Practitioner>();

  @Output()
  practitionerUpdate = new EventEmitter<Practitioner>();

  @Output()
  practitionerDelete = new EventEmitter<Practitioner>();

  practitionerForm = new FormGroup({
    active: new FormControl(true),
    gender: new FormControl("unknown"),
    birthDate: new FormControl(null as Date | null),
    telecom: new FormArray([
      this.createTelecomGroup()      
    ]),
    deceasedBoolean: new FormControl(false),
    address: new FormArray([
      this.createAddressFormGroup()
    ]),
    name: new FormArray([
      this.createHumanNameFormGroup()
    ])
  });

  createHumanNameFormGroup() {
    return new FormGroup({
      text: new FormControl("")
    })
  }

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
    this.practitionerForm.controls.address.push( 
      this.createAddressFormGroup() 
    )
  }

  removeAddress(index:number) {
    this.practitionerForm.controls.address.removeAt(index)
  }

  addNewTelecom() {
    this.practitionerForm.controls.telecom.push(
      this.createTelecomGroup()
    )
  }

  removeTelecom(index:number) {
    this.practitionerForm.controls.address.removeAt(index)
  }

  addNewName() {
    this.practitionerForm.controls.name.push(
      this.createHumanNameFormGroup()
    )
  }

  removeName(index:number) {
    this.practitionerForm.controls.name.removeAt(index)
  }

  savePractitioner(){
    if(this.currentPractitioner?.id) { 
      const merged = merge(this.currentPractitioner!, this.practitionerForm.value) 
      merged.id = this.currentPractitioner.id;
      this.practitionerUpdate.emit(merged)      
    } else {
        this.practitionerCreate.emit(this.practitionerForm.value as any);    
    };  
  }
  
  deletePractitioner(){
    this.practitionerDelete.emit(this.currentPractitioner)
  }

  ngOnChanges(): void {
    this.practitionerForm.reset();

    if(!this.currentPractitioner){
      return;
    }

    // array muss gleiche länge haben wie datensatz vom server
    this.practitionerForm.controls.address.clear();
    while (
      this.practitionerForm.controls.address.length <
      (this.currentPractitioner.address?.length ?? 0)
    ) {
      this.addNewAddress();
    }

    // array muss gleiche länge haben wie datensatz vom server
    this.practitionerForm.controls.telecom.clear();
    while (
      this.practitionerForm.controls.telecom.length <
      (this.currentPractitioner.telecom?.length ?? 0)
    ) {
      this.addNewTelecom();
    }

    // array muss gleiche länge haben wie datensatz vom server
    this.practitionerForm.controls.name.clear();
    while (
      this.practitionerForm.controls.name.length <
      (this.currentPractitioner.name?.length ?? 0)
    ) {
      this.addNewName();
    }

    this.practitionerForm.patchValue(this.currentPractitioner);
  }
}
