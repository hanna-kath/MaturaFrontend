import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionprescriptionListComponent } from './visionprescription-list.component';

describe('VisionprescriptionListComponent', () => {
  let component: VisionprescriptionListComponent;
  let fixture: ComponentFixture<VisionprescriptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisionprescriptionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionprescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
