import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailExpiredComponent } from './email-expired.component';

describe('EmailExpiredComponent', () => {
  let component: EmailExpiredComponent;
  let fixture: ComponentFixture<EmailExpiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EmailExpiredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
