import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquePrestataireAppointmentsComponent } from './historique-prestataire-appointments.component';

describe('HistoriquePrestataireAppointmentsComponent', () => {
  let component: HistoriquePrestataireAppointmentsComponent;
  let fixture: ComponentFixture<HistoriquePrestataireAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HistoriquePrestataireAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriquePrestataireAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
