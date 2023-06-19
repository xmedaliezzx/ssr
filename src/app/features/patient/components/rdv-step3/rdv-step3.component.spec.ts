import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvStep3Component } from './rdv-step3.component';

describe('RdvStep3Component', () => {
  let component: RdvStep3Component;
  let fixture: ComponentFixture<RdvStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RdvStep3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
