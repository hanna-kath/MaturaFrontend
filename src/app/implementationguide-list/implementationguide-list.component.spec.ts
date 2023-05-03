import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementationguideListComponent } from './implementationguide-list.component';

describe('ImplementationguideListComponent', () => {
  let component: ImplementationguideListComponent;
  let fixture: ComponentFixture<ImplementationguideListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplementationguideListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImplementationguideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
