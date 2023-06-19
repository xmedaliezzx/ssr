import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationReminderComponent } from './notification-reminder.component';

describe('NotificationReminderComponent', () => {
  let component: NotificationReminderComponent;
  let fixture: ComponentFixture<NotificationReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NotificationReminderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
