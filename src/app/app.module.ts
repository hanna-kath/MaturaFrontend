import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PatientFormComponent } from './patient-form/patient-form.component';
import { RouterModule } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PractitionerListComponent } from './practitioner-list/practitioner-list.component';
import { PractitionerFormComponent } from './practitioner-form/practitioner-form.component';
import { VisionprescriptionFormComponent } from './visionprescription-form/visionprescription-form.component';
import { VisionprescriptionListComponent } from './visionprescription-list/visionprescription-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientFormComponent,
    PatientListComponent,
    PractitionerListComponent,
    PractitionerFormComponent,
    VisionprescriptionFormComponent,
    VisionprescriptionListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'patients', redirectTo: '/patients/', pathMatch: 'full'},
      {path: 'patients/:id', component: PatientListComponent},
      {path: 'practitioners', component: PractitionerListComponent},
      {path: 'practitioners/:id', component: PractitionerListComponent},
      {path: 'visionprescriptions', component: VisionprescriptionListComponent},
      {path: 'visionprescriptions/:id', component: VisionprescriptionListComponent},
      {path: '', redirectTo:  '/patients/', pathMatch: 'full'},
    ],)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
