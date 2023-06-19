import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsMonthComponent } from './statistics-month.component';

describe('StatisticsMonthComponent', () => {
  let component: StatisticsMonthComponent;
  let fixture: ComponentFixture<StatisticsMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StatisticsMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
