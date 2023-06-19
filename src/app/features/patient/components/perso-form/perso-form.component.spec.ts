import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoFormComponent } from './perso-form.component';

describe('PersoFormComponent', () => {
  let component: PersoFormComponent;
  let fixture: ComponentFixture<PersoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PersoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
