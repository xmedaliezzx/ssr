import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedAppointmentComponent } from './blocked-appointment.component';

describe('BlockedAppointmentComponent', () => {
  let component: BlockedAppointmentComponent;
  let fixture: ComponentFixture<BlockedAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BlockedAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockedAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
