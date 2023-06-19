import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvAppointmentComponent } from './rdv-appointment.component';

describe('RdvAppointmentComponent', () => {
  let component: RdvAppointmentComponent;
  let fixture: ComponentFixture<RdvAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RdvAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
