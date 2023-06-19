import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionEnCoursComponent } from './mission-en-cours.component';

describe('MissionEnCoursComponent', () => {
  let component: MissionEnCoursComponent;
  let fixture: ComponentFixture<MissionEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MissionEnCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
