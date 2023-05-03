import { Component, OnInit } from '@angular/core';
import { ImplementationGuide } from '../model/ImplementationGuide';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-implementationguide-list',
  templateUrl: './implementationguide-list.component.html',
  styleUrls: ['./implementationguide-list.component.css']
})
export class ImplementationguideListComponent implements OnInit {
  public implementationguides: ImplementationGuide[] = [];
  currentImplementationGuide?: ImplementationGuide = undefined
   
  constructor(
    private dataService: DataService,
    private router: Router,
    activatedRoute: ActivatedRoute
  ){
    activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id) {
        dataService.getImplementationGuide(id).subscribe(implementationguide => {
          this.currentImplementationGuide = implementationguide;
        });
      }
    });
  }
  
  createNewImplementationGuide() {
    this.router.navigate(['/implementationguides/'])
    this.currentImplementationGuide = {};
  }
  
  createImplementationGuide(implementationguide: ImplementationGuide) {
    this.dataService.postImplementationGuide(implementationguide).subscribe(response => {
      console.log('post', response);
      this.fetchImplementationGuides();
      this.currentImplementationGuide = undefined;
    });
  }
  
  updateImplementationGuide(implementationguide: ImplementationGuide) {
    this.dataService.putImplementationGuide(implementationguide).subscribe(response => {
      console.log('put', response);
      this.fetchImplementationGuides();
      this.currentImplementationGuide = undefined;
    });
  }
  
  deleteImplementationGuide(implementationguide: ImplementationGuide) {
    this.dataService.deleteImplementationGuide(implementationguide).subscribe(response => {
      console.log('ImplementationGuide deleted', response);
      this.fetchImplementationGuides();
      this.currentImplementationGuide = undefined;
    });
  }
  
  ngOnInit(): void {
    this.fetchImplementationGuides();
  }
  
  fetchImplementationGuides() {
    this.dataService.getImplementationGuides().subscribe(implementationguides => {
      console.log(this.implementationguides);
      this.implementationguides = implementationguides;
    });
  }
}
