import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionprescriptionFormComponent } from './visionprescription-form.component';

describe('VisionprescriptionFormComponent', () => {
  let component: VisionprescriptionFormComponent;
  let fixture: ComponentFixture<VisionprescriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisionprescriptionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionprescriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
