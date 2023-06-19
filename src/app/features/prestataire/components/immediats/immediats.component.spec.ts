import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmediatsComponent } from './immediats.component';

describe('ImmediatsComponent', () => {
  let component: ImmediatsComponent;
  let fixture: ComponentFixture<ImmediatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ImmediatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImmediatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
