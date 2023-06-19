import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouAreComponent } from './you-are.component';

describe('YouAreComponent', () => {
  let component: YouAreComponent;
  let fixture: ComponentFixture<YouAreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ YouAreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YouAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
