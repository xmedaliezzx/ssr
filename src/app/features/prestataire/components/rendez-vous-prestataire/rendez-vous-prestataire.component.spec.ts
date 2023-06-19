import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousPrestataireComponent } from './rendez-vous-prestataire.component';

describe('RendezVousPrestataireComponent', () => {
  let component: RendezVousPrestataireComponent;
  let fixture: ComponentFixture<RendezVousPrestataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RendezVousPrestataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendezVousPrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
