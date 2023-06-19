import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNavigatorComponent } from './patient-navigator.component';

describe('PatientNavigatorComponent', () => {
  let component: PatientNavigatorComponent;
  let fixture: ComponentFixture<PatientNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PatientNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
