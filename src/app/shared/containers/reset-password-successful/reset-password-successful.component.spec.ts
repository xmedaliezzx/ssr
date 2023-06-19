import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordSuccessfulComponent } from './reset-password-successful.component';

describe('ResetPasswordSuccessfulComponent', () => {
  let component: ResetPasswordSuccessfulComponent;
  let fixture: ComponentFixture<ResetPasswordSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ResetPasswordSuccessfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
