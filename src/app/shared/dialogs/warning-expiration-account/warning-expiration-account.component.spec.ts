import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningExpirationAccountComponent } from './warning-expiration-account.component';

describe('WarningExpirationAccountComponent', () => {
  let component: WarningExpirationAccountComponent;
  let fixture: ComponentFixture<WarningExpirationAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WarningExpirationAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningExpirationAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
