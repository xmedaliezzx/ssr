import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAvailableAppointmentComponent } from './not-available-appointment.component';

describe('NotAvailableAppointmentComponent', () => {
  let component: NotAvailableAppointmentComponent;
  let fixture: ComponentFixture<NotAvailableAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NotAvailableAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotAvailableAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
