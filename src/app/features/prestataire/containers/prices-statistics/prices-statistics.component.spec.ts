import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesStatisticsComponent } from './prices-statistics.component';

describe('PricesStatisticsComponent', () => {
  let component: PricesStatisticsComponent;
  let fixture: ComponentFixture<PricesStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PricesStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricesStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
