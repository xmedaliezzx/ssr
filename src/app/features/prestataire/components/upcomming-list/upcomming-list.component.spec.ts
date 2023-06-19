import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingListComponent } from './upcomming-list.component';

describe('UpcommingListComponent', () => {
  let component: UpcommingListComponent;
  let fixture: ComponentFixture<UpcommingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UpcommingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcommingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
