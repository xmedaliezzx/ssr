import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordTokenVerifierComponent } from './reset-password-token-verifier.component';

describe('ResetPasswordTokenVerifierComponent', () => {
  let component: ResetPasswordTokenVerifierComponent;
  let fixture: ComponentFixture<ResetPasswordTokenVerifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ResetPasswordTokenVerifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordTokenVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
