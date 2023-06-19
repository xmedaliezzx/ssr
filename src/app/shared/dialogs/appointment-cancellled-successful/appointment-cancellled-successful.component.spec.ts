import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentCancellledSuccessfulComponent } from './appointment-cancellled-successful.component';

describe('AppointmentCancellledSuccessfulComponent', () => {
  let component: AppointmentCancellledSuccessfulComponent;
  let fixture: ComponentFixture<AppointmentCancellledSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppointmentCancellledSuccessfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentCancellledSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
