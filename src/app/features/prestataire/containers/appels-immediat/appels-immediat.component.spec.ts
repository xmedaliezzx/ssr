import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelsImmediatComponent } from './appels-immediat.component';

describe('AppelsImmediatComponent', () => {
  let component: AppelsImmediatComponent;
  let fixture: ComponentFixture<AppelsImmediatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppelsImmediatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppelsImmediatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
