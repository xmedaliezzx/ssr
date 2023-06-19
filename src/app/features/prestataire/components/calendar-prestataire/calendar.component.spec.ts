import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPrestataireComponent } from './calendar-prestataire.component';

describe('CalendarPrestataireComponent', () => {
  let component: CalendarPrestataireComponent;
  let fixture: ComponentFixture<CalendarPrestataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CalendarPrestataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarPrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
