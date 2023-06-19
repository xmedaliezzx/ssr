import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSearchServiceComponent } from './home-search-service.component';

describe('HomeSearchServiceComponent', () => {
  let component: HomeSearchServiceComponent;
  let fixture: ComponentFixture<HomeSearchServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HomeSearchServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSearchServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
