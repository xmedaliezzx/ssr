import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonChoixComponent } from './livraison-choix.component';

describe('LivraisonChoixComponent', () => {
  let component: LivraisonChoixComponent;
  let fixture: ComponentFixture<LivraisonChoixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LivraisonChoixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivraisonChoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
