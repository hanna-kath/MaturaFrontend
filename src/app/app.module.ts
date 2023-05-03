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
import { MedicationFormComponent } from './medication-form/medication-form.component';
import { MedicationListComponent } from './medication-list/medication-list.component';
import { ImplementationguideListComponent } from './implementationguide-list/implementationguide-list.component';
import { ImplementationguideFormComponent } from './implementationguide-form/implementationguide-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientFormComponent,
    PatientListComponent,
    PractitionerListComponent,
    PractitionerFormComponent,
    MedicationFormComponent,
    MedicationListComponent,
    ImplementationguideListComponent,
    ImplementationguideFormComponent,
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
      {path: 'medications', component: MedicationListComponent},
      {path: 'medications/:id', component: MedicationListComponent},
      {path: 'implementationguides', component: ImplementationguideListComponent},
      {path: 'implementationguides/:id', component: ImplementationguideListComponent},
      {path: '', redirectTo:  '/patients/', pathMatch: 'full'},
    ],)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
