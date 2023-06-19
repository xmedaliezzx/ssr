import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingListComponent } from './reporting-list.component';

describe('ReportingListComponent', () => {
  let component: ReportingListComponent;
  let fixture: ComponentFixture<ReportingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReportingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
