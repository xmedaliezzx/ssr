import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireRatingComponent } from './prestataire-rating.component';

describe('PrestataireRatingComponent', () => {
  let component: PrestataireRatingComponent;
  let fixture: ComponentFixture<PrestataireRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PrestataireRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestataireRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
