import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterNuitComponent } from './inter-nuit.component';

describe('InterNuitComponent', () => {
  let component: InterNuitComponent;
  let fixture: ComponentFixture<InterNuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InterNuitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterNuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
