import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelsPFComponent } from './appels-pf.component';

describe('AppelsPFComponent', () => {
  let component: AppelsPFComponent;
  let fixture: ComponentFixture<AppelsPFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppelsPFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppelsPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
