import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireNavigatorComponent } from './prestataire-navigator.component';

describe('PrestataireNavigatorComponent', () => {
  let component: PrestataireNavigatorComponent;
  let fixture: ComponentFixture<PrestataireNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PrestataireNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestataireNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
