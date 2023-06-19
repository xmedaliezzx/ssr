import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterJourComponent } from './inter-jour.component';

describe('InterJourComponent', () => {
  let component: InterJourComponent;
  let fixture: ComponentFixture<InterJourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InterJourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
