import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsRevenuesComponent } from './statistics-revenues.component';

describe('StatisticsRevenuesComponent', () => {
  let component: StatisticsRevenuesComponent;
  let fixture: ComponentFixture<StatisticsRevenuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StatisticsRevenuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsRevenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
