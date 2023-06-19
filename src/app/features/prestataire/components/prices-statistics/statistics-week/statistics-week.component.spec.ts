import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsWeekComponent } from './statistics-week.component';

describe('StatisticsWeekComponent', () => {
  let component: StatisticsWeekComponent;
  let fixture: ComponentFixture<StatisticsWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StatisticsWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
