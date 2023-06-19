import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelsComponent } from './appels.component';

describe('AppelsComponent', () => {
  let component: AppelsComponent;
  let fixture: ComponentFixture<AppelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
