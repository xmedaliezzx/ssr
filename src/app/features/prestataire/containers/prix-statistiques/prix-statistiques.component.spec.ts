import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixStatistiquesComponent } from './prix-statistiques.component';

describe('PrixStatistiquesComponent', () => {
  let component: PrixStatistiquesComponent;
  let fixture: ComponentFixture<PrixStatistiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PrixStatistiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrixStatistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
