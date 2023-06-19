import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterTotalComponent } from './inter-total.component';

describe('InterTotalComponent', () => {
  let component: InterTotalComponent;
  let fixture: ComponentFixture<InterTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InterTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
