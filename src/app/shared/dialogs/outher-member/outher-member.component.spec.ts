import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutherMemberComponent } from './outher-member.component';

describe('OutherMemberComponent', () => {
  let component: OutherMemberComponent;
  let fixture: ComponentFixture<OutherMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OutherMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutherMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
