import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvStep1Component } from './rdv-step1.component';

describe('RdvStep1Component', () => {
  let component: RdvStep1Component;
  let fixture: ComponentFixture<RdvStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RdvStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
