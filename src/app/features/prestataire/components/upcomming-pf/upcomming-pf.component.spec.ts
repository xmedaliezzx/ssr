import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingPFComponent } from './upcomming-pf.component';

describe('UpcommingPFComponent', () => {
  let component: UpcommingPFComponent;
  let fixture: ComponentFixture<UpcommingPFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UpcommingPFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcommingPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
