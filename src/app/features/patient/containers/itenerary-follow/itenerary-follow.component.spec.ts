import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteneraryFollowComponent } from './itenerary-follow.component';

describe('IteneraryFollowComponent', () => {
  let component: IteneraryFollowComponent;
  let fixture: ComponentFixture<IteneraryFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IteneraryFollowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IteneraryFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
