import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueAppelsImmediatComponent } from './historique-appels-immediat.component';

describe('HistoriqueAppelsImmediatComponent', () => {
  let component: HistoriqueAppelsImmediatComponent;
  let fixture: ComponentFixture<HistoriqueAppelsImmediatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HistoriqueAppelsImmediatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueAppelsImmediatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
