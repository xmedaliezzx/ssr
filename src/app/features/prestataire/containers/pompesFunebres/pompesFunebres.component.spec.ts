import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PompesFunebresComponent } from './pompesFunebres.component';

describe('PompesFunebresComponent', () => {
  let component: PompesFunebresComponent;
  let fixture: ComponentFixture<PompesFunebresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PompesFunebresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PompesFunebresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
