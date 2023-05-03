import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ImplementationGuide } from '../model/ImplementationGuide';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { merge } from 'lodash';

@Component({
  selector: 'app-implementationguide-form',
  templateUrl: './implementationguide-form.component.html',
  styleUrls: ['./implementationguide-form.component.css']
})
export class ImplementationguideFormComponent implements OnChanges {
  constructor() { }

  @Input()
  public currentImplementationGuide?: ImplementationGuide = undefined;

  @Output()
  implementationGuideCreate = new EventEmitter<ImplementationGuide>();

  @Output()
  implementationGuideUpdate = new EventEmitter<ImplementationGuide>();

  @Output()
  implementationGuideDelete = new EventEmitter<ImplementationGuide>();

  implementationGuideForm = new FormGroup({
    date: new FormControl(new Date(Date.now())),
    dependsOn: new FormArray([
      this.createDependsOnGroup()      
    ]),
    contact: new FormArray([
        this.createContactGroup()
    ]),
    status: new FormControl(""),
    name: new FormControl(""),
    url: new FormControl(""),
  });

  createDependsOnGroup() {
    return new FormGroup({
      uri: new FormControl(""),
      reason: new FormControl("")
    })
  } 

  createContactGroup() {
    return new FormGroup({
      name: new FormControl(""),
      tele: new FormControl("")
    })
  } 

  addNewDependsOn() {
    this.implementationGuideForm.controls.dependsOn.push( 
      this.createDependsOnGroup() 
    )
  }

  removeDependsOn(index:number) {
    this.implementationGuideForm.controls.dependsOn.removeAt(index)
  }

  addNewContact() {
    this.implementationGuideForm.controls.contact.push(
      this.createContactGroup()
    )
  }

  removeContact(index:number) {
    this.implementationGuideForm.controls.contact.removeAt(index)
  }

  saveImplementationGuide(){
    if(this.currentImplementationGuide?.id) { 
      const merged = merge(this.currentImplementationGuide!, this.implementationGuideForm.value) 
      merged.id = this.currentImplementationGuide.id;
      this.implementationGuideUpdate.emit(merged)      
    } else {
        this.implementationGuideCreate.emit(this.implementationGuideForm.value as any);    
    };  
  }

  deleteImplementationGuide(){
    this.implementationGuideDelete.emit(this.currentImplementationGuide)
  }

  ngOnChanges(): void {

    this.implementationGuideForm.reset();

    if(!this.currentImplementationGuide){
      return;
    }

    // array muss gleiche länge haben wie datensatz vom server
    this.implementationGuideForm.controls.dependsOn.clear();
    while (
      this.implementationGuideForm.controls.dependsOn.length <
      (this.currentImplementationGuide.dependsOn?.length ?? 0)
    ) {
      this.addNewDependsOn();
    }

    // array muss gleiche länge haben wie datensatz vom server
    this.implementationGuideForm.controls.contact.clear();
    while (
      this.implementationGuideForm.controls.contact.length <
      (this.currentImplementationGuide.contact?.length ?? 0)
    ) {
      this.addNewContact();
    }

    this.implementationGuideForm.patchValue(this.currentImplementationGuide);
  }

}
