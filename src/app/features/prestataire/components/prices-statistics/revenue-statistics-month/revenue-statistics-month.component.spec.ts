import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueStatisticsMonthComponent } from './revenue-statistics-month.component';

describe('RevenueStatisticsMonthComponent', () => {
  let component: RevenueStatisticsMonthComponent;
  let fixture: ComponentFixture<RevenueStatisticsMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RevenueStatisticsMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueStatisticsMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
