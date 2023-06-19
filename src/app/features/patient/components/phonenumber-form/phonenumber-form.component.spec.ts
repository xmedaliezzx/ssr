import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonenumberFormComponent } from './phonenumber-form.component';

describe('PhonenumberFormComponent', () => {
  let component: PhonenumberFormComponent;
  let fixture: ComponentFixture<PhonenumberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PhonenumberFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonenumberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
