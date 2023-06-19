import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinsChoixComponent } from './soins-choix.component';

describe('SoinsChoixComponent', () => {
  let component: SoinsChoixComponent;
  let fixture: ComponentFixture<SoinsChoixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SoinsChoixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoinsChoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
