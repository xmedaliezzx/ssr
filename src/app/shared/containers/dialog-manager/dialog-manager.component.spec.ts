import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogManagerComponent } from './dialog-manager.component';

describe('DialogManagerComponent', () => {
  let component: DialogManagerComponent;
  let fixture: ComponentFixture<DialogManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DialogManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
