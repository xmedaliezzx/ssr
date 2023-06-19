import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHealthcareComponent } from './list-healthcare.component';

describe('ListHealthcareComponent', () => {
  let component: ListHealthcareComponent;
  let fixture: ComponentFixture<ListHealthcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ListHealthcareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHealthcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
