import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivationReasonComponent } from './deactivation-reason.component';

describe('DeactivationReasonComponent', () => {
  let component: DeactivationReasonComponent;
  let fixture: ComponentFixture<DeactivationReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DeactivationReasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeactivationReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
