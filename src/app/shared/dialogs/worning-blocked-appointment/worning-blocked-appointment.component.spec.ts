import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorningBlockedAppointmentComponent } from './worning-blocked-appointment.component';

describe('WorningBlockedAppointmentComponent', () => {
  let component: WorningBlockedAppointmentComponent;
  let fixture: ComponentFixture<WorningBlockedAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WorningBlockedAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorningBlockedAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
