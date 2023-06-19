import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueStatisticsDayComponent } from './revenue-statistics-day.component';

describe('RevenueStatisticsDayComponent', () => {
  let component: RevenueStatisticsDayComponent;
  let fixture: ComponentFixture<RevenueStatisticsDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RevenueStatisticsDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueStatisticsDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
