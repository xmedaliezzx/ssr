import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezvousPFComponent } from './rendezvous-pf.component';

describe('RendezvousPFComponent', () => {
  let component: RendezvousPFComponent;
  let fixture: ComponentFixture<RendezvousPFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RendezvousPFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendezvousPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
