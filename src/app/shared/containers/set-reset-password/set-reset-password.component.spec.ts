import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetResetPasswordComponent } from './set-reset-password.component';

describe('SetResetPasswordComponent', () => {
  let component: SetResetPasswordComponent;
  let fixture: ComponentFixture<SetResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SetResetPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
