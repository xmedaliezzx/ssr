import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivationConfirmationComponent } from './deactivation-confirmation.component';

describe('DeactivationConfirmationComponent', () => {
  let component: DeactivationConfirmationComponent;
  let fixture: ComponentFixture<DeactivationConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DeactivationConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeactivationConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
