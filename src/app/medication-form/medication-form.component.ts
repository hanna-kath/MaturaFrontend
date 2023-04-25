import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Medication } from '../model/Medication';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { merge } from 'lodash';
import { CodeableConcept } from '../model/CodeableConcept';
import { Reference } from '../model/Reference';

@Component({
  selector: 'app-medication-form',
  templateUrl: './medication-form.component.html',
  styleUrls: ['./medication-form.component.css']
})
export class MedicationFormComponent implements OnChanges {

  constructor() { }

  @Input()
  public currentMedication?: Medication = undefined;

  @Output()
  medicationCreate = new EventEmitter<Medication>();

  @Output()
  medicationUpdate = new EventEmitter<Medication>();

  @Output()
  medicationDelete = new EventEmitter<Medication>();

  medicationForm = new FormGroup({
    code: new FormControl(null as CodeableConcept | null),
    status: new FormControl(""),
    mah: new FormControl(null as Reference | null),
    doseform: new FormControl(null as CodeableConcept | null),
    totalvolume: new FormControl(),
    ingredient: new FormArray([
      this.createIngredientGroup()
    ]),
    batch: new FormControl(),
    definition: new FormControl()
  });

  createIngredientGroup() {
    return new FormGroup({
      isActive: new FormControl(true),
    })
  } 

  addNewIngredient() {
    this.medicationForm.controls.ingredient.push( // push hängt am array einen eintrag an
      this.createIngredientGroup() // methode um kopierten code zu vermeiden
    )
  }

  removeIngredient(index:number) {
    this.medicationForm.controls.ingredient.removeAt(index)
  }

  saveMedication(){
    if(this.currentMedication?.id) { 
      const merged = merge(this.currentMedication!, this.medicationForm.value) 
      merged.id = this.currentMedication.id;
      this.medicationUpdate.emit(merged)      
    } else {
        this.medicationCreate.emit(this.medicationForm.value as any);    
    };  
  }
  
  deleteMedication(){
    this.medicationDelete.emit(this.currentMedication)
  }

  ngOnChanges(): void {

    this.medicationForm.reset();

    if(!this.currentMedication){
      return;
    }

    // array muss gleiche länge haben wie datensatz vom server
    this.medicationForm.controls.ingredient.clear();
    while (
      this.medicationForm.controls.ingredient.length <
      (this.currentMedication.ingredient?.length ?? 0)
    ) {
      this.addNewIngredient();
    }

    this.medicationForm.patchValue(this.currentMedication);
  }
}
