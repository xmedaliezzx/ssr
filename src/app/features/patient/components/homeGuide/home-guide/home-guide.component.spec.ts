import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGuideComponent } from './home-guide.component';

describe('HomeGuideComponent', () => {
  let component: HomeGuideComponent;
  let fixture: ComponentFixture<HomeGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HomeGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
