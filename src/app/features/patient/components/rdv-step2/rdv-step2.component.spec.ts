import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvStep2Component } from './rdv-step2.component';

describe('RdvStep2Component', () => {
  let component: RdvStep2Component;
  let fixture: ComponentFixture<RdvStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RdvStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
