import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvStep4Component } from './rdv-step4.component';

describe('RdvStep4Component', () => {
  let component: RdvStep4Component;
  let fixture: ComponentFixture<RdvStep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RdvStep4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
